import jwt from 'jsonwebtoken';
import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const adminLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    
    if (email !== process.env.ADMIN_EMAIL && password !== process.env.ADMIN_PASSWORD) {
        throw new ApiError(401, "Invalid User Credentials");
    }

    const token = jwt.sign(
        process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD,
        process.env.ACCESS_TOKEN_SECRET,
    );

    

    const options = {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: false,
    };

    return res
        .status(200)
        .cookie("accessToken", token, options)
        .json(
            new ApiResponse(
                200,
                { token: token },
                "Admin Logged In Successfully"
            )
        );


});

export const adminAuthenticate = asyncHandler (async (req, res) => {
    return res.status(200).json(new ApiResponse(200, null, 'ok'));
})

export const logout = asyncHandler( async (req, res)=>{
    res.cookie('accessToken', {maxAge:0})

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                null,
                "User Logged out Successfully"
            )
        );

})