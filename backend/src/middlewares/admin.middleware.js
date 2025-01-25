import jwt from 'jsonwebtoken';
import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';



const adminAuth = asyncHandler(async (req, res, next) => {

    try {
        var token = req.cookies.accessToken;
    } catch (err) {
        console.log(err, req.cookies)
        return res.status(401).json(new ApiResponse(401, null, 'Login First'));
    }

    

    if (!token) return res.status(403).json(new ApiResponse(403, null, 'Access denied'));
    
    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        if (payload !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            
            return res.status(403).json(new ApiResponse(403, null, 'Access denied'));
        }
        req.user = payload;
        return next();
    } catch (err) {
        
        console.log(err);
        return res.status(401).json(new ApiResponse(401, null, 'Invalid token'));
    }


});


export default adminAuth;