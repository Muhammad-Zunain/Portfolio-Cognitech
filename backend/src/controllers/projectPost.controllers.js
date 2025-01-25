import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { Projects, categorySch, service, extraSch } from "../models/projectSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const postProject = asyncHandler(async (req, res) => {

    console.log(req)
    const { category, title, desc, technologies } = req.body;
    if (!category || !title || !desc) {
        throw new ApiError(400, "All fields are required");
    }


    console.log(category, title, desc, technologies)

    // Process technologies input
    const techArray = Array.isArray(technologies)
        ? technologies
        : technologies.split(" ").filter(Boolean);

    if (!req.files || req.files.length === 0) {
        throw new ApiError(400, "No files uploaded");
    }

    // Upload files to Cloudinary
    const serviceImages = await Promise.all(
        req.files.map(async (file) => {
            if (!file.path) throw new ApiError(400, "Invalid file provided");
            return uploadOnCloudinary(file.path);
        })
    );


    //find extra 
    let extra = await extraSch.findOne({
        'name': category
    })

    let Category= null

    if (!extra) {
         extra = await extraSch.create({
            name: category,
            description: desc
        })

        
    }


    Category = await categorySch.findOne({
        'extra': extra
    })

    if (!Category) {
        Category = await categorySch.create({
            extra: extra,
            service: []
        })
    }


    console.log(extra)
    console.log("category", Category)



    // Find project category
    let projectCategoryData = await Projects.findOne({
        "frontend.extra.name": category,
    });

    if (!projectCategoryData) {
        projectCategoryData = await Projects.create({
            frontend: Category
        })
    }


    console.log("yeah",projectCategoryData)

    // Create and save service
    const servicePro = await service.create({
        title,
        description: desc,
        technologies: techArray,
        images: serviceImages,
    });

   

    // Append the service to the category
    if ( projectCategoryData.frontend.service ) {
        projectCategoryData.frontend.service.push(servicePro);
    } else {
        projectCategoryData.frontend.service = [servicePro]
    }
    await projectCategoryData.save();

    const verified = await Projects.findById(projectCategoryData._id)

    console.log('verified', verified)

    return res.status(201).json(new ApiResponse(201, "Project created successfully!"));
});


export default postProject;
