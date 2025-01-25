import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Projects, extraSch } from "../models/projectSchema.js";

// Showcase projects function
const showcaseProjects = asyncHandler(async (req, res) => {
    const serviceName = req.params.serviceName;
    console.log(serviceName)
    
    const extra = await extraSch.find({
        'name':serviceName
    })
    
    const project = await Projects.find();
    // const project = await Projects.find({
    //     'extra': extra // serviceName is the name you want to match
    // });

    console.log(project)

    return res.status(201).json(
        new ApiResponse(200, project)
    );
});

// Export the function
export default showcaseProjects;
