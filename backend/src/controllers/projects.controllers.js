import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Projects, extraSch, categorySch } from "../models/projectSchema.js";

// Showcase projects function
const showcaseProjects = asyncHandler(async (req, res) => {
    const serviceName = req.params.serviceName;
    const project = await Projects.findOne({
        'frontend.extra.slug': serviceName // serviceName is the name you want to match
    });


    return res.status(201).json(
        new ApiResponse(200, project)
    );
});

// Export the function
export default showcaseProjects;
