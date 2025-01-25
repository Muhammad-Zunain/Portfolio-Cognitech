import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {Projects, categorySch, extraSch } from "../models/projectSchema.js";

const addService = asyncHandler(async (req, res) => {
    // Destructure the name and description from the request body
    const { name, desc } = req.body;
    console.log(name, desc); // Ensure this prints the correct values

    // Check if all required fields are provided
    if (!name || !desc) {
        throw new ApiError(400, "All Fields Are Required");
    }


    const extraExists = await extraSch.findOne({name:name})
    if (extraExists) {
        throw new ApiError(400, "Already Service Exists");
    }

    // Create a new extra entry
    const extra = await extraSch.create({
        name: name,
        description: desc,
    });

    // Check if extra was created successfully
    if (!extra) {
        throw new ApiError(400, "Some error Occurred");
    }

    // Create a new category entry, you may need to adjust this depending on your schema
    const category = await categorySch.create({
        extra: extra,  // Store the ID of the extra in the category
    });

    // Check if category creation was successful
    if (!category) {
        throw new ApiError(400, "Error occurred while creating category");
    }

    const projects = await Projects.create({
        frontend: category
    })

    if (!projects) {
        throw new ApiError(400, "Error occurred while creating category");
    }

    console.log(category)

    // Return success response
    return res.status(201).json(new ApiResponse(200, "Created successfully!"));
});

export default addService;
