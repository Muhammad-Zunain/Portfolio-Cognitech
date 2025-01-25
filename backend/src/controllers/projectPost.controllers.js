import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Projects, categorySch, service, extraSch } from "../models/projectSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const postProject = asyncHandler(async (req, res) => {
    const { category, title, desc } = req.body; // Explicitly destructuring the fields
    let {technologies} = req.body
    technologies = technologies.split(" ")
    // Validate fields
    if ([category, title, desc].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All Fields Are Required");
    }

    const files = req.files;

    if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
    }

    // Handle file uploads
    const serviceImages = await Promise.all(files.map(file => uploadOnCloudinary(file.path)));


    // Check if any projects exist
    const projectExists = await Projects.countDocuments();
    if (projectExists === 0) {
        throw new ApiError(400, "No Project Exists");
    }

    // Find the project category based on the provided category
    const projectCategoryData = await Projects.findOne({
        'frontend.extra.name': category
    });


    // Check if the category exists
    if (!projectCategoryData) {
        throw new ApiError(400, "No Service Category Exists");
    }

    // Create the service
    const servicePro = await service.create({
        title,
        description: desc,
        technologies: technologies,
        images: serviceImages
    });

    const serviceData = await service.findById(servicePro._id);
    if (!serviceData) {
        throw new ApiError(500, "Something went wrong while creating service");
    }

    // Append service to the project category data
    projectCategoryData.frontend.service.push(serviceData);
    await projectCategoryData.save(); // Ensure to await the save operation

    return res.status(201).json(new ApiResponse(200, "Project created successfully!"));
});

export default postProject;
