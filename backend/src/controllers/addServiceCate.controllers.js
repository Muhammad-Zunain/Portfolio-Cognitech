import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {Projects, categorySch, extraSch } from "../models/projectSchema.js";

const addService = asyncHandler(async (req, res) => {
    // Destructure the name and description from the request body
    const { name, desc } = req.body;
    

    // Check if all required fields are provided
    if (!name || !desc) {
        
        return res.status(201).json(new ApiResponse(400, null, "All Fields Are Required"));
    }


    const extraExists = await extraSch.findOne({name:name})
    if (extraExists) {
        
        return res.status(201).json(new ApiResponse(400, null, "Already Service Exists"));
        
    }

    // Create a new extra entry
    const extra = await extraSch.create({
        name: name,
        description: desc,
    });

    // Check if extra was created successfully
    if (!extra) {
        
        return res.status(201).json(new ApiResponse(400, null, "Some error Occurred"));
    }

    // Create a new category entry, you may need to adjust this depending on your schema
    const category = await categorySch.create({
        extra: extra,  // Store the ID of the extra in the category
    });

    // Check if category creation was successful
    if (!category) {
        
        return res.status(201).json(new ApiResponse(400, null, "Error occurred while creating category"));
    }

    const projects = await Projects.create({
        frontend: category
    })

    if (!projects) {
        
        return res.status(201).json(new ApiResponse(400, null, "Error occurred while creating category"));
    }

    

    // Return success response
    return res.status(201).json(new ApiResponse(200, "Created successfully!"));
});


const allCategory = asyncHandler (async (req, res)=>{
    const allCategories = await categorySch.find()
    
    return res.status(201).json(new ApiResponse(200, allCategories, ""));
})


const deleteCategories = asyncHandler (async (req, res)=>{
    const a = ['test10', 'backend', 'backenD', 'backenDd', 'backenDdg', 'baclenDdg']
    for (const name of a) {
        const extra = await extraSch.findOne({ name: name });
        if (extra) {
            const category = await categorySch.findOne({ "extra._id": extra._id });
            if (category) {
                 await Projects.deleteOne(
                    { "frontend._id": category._id },
                );

              

                await categorySch.deleteOne({ _id: category._id });
            }
            await extraSch.deleteOne({ _id: extra._id });
        }
    }
    return res.status(200).json(new ApiResponse(200, "Categories deleted successfully"));
})

export  {addService, allCategory, deleteCategories};
