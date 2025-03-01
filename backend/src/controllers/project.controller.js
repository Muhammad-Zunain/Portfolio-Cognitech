
import Project from "../models/project.model.js";
import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
 

/** ===========================
 * @desc Get All Projects
 * @route GET /api/projects
 * @access Public
 =========================== */
 export const getProjects = asyncHandler(async (req, res) => {
    console.log("Fetching all projects...");

        const projects = await Project.find().populate("category");
        console.log("Projects Retrieved:", projects);

        if (!projects || projects.length === 0) {
            console.log("No projects found.");
            return res.status(202).json(new ApiResponse(202, null, "No projects found"));
        }

        return res.status(200).json(new ApiResponse(200, projects, "Projects retrieved successfully"));
    
});

/** ===========================
 * @desc Add New Project
 * @route POST /api/projects
 * @access Admin
 =========================== */

 export const addProject = asyncHandler(async (req, res) => {
    const existingProject = await Project.findOne({ title: req.body.title });
if (existingProject) {
  return res.status(400).json({ message: "Project with this title already exists" });
}
const projects = await Project.find().populate("category");



    // console.log("Received request to add project:", req.body);
    // console.log("Received files:", req.files); 

    const { projectName, description, technologies, category } = req.body;
    const images = req.files?.map((file) => file.path) || []; 
    console.log("Images received:", images);

    const existingCategory = await Category.findOne({ name: category });
    if (!existingCategory) {
        console.log("Invalid category name:", category);
        throw new ApiError(400, "Invalid category name");
    }

    const serviceImages = await Promise.all(
            images.map(async (path) => {
              
              return uploadOnCloudinary(path);
            })
        );

    

    let parsedTechnologies = [];
    if (Array.isArray(technologies)) {
        parsedTechnologies = technologies;
    } else if (typeof technologies === "string") {
        try {
            parsedTechnologies = JSON.parse(technologies);
        } catch (error) {
            console.error("Invalid JSON format for technologies:", technologies);
            throw new ApiError(400, "Invalid JSON format for technologies");
        }
    }

    const project = new Project({
        title: projectName,
        description,
        technologies: parsedTechnologies,
        images:serviceImages,
        category: existingCategory._id,
    });
    
    
    await project.save();

    console.log("Project added successfully:", project);
    return res.status(201).json(new ApiResponse(201, project, "Project added successfully"));
});



/** ===========================
 * @desc Update Project
 * @route PUT /api/projects/:id
 * @access Admin
 =========================== */
export const updateProject = asyncHandler(async (req, res) => {
    console.log("Received request to update project:", req.params.id, req.body);

    const { title, description, technologies, category } = req.body;
    console.log(req.body)
    const images = req.files ? req.files.map((file) => file.path) : undefined;

    let updateData = { title, description, category };
    if (images) updateData.images = images;

    if (category) {
        try {
            const categoryDoc = await Category.findOne({ name: category });
            if (!categoryDoc) {
                return res.status(400).json(new ApiResponse(400, null, "Invalid category"));
            }
            updateData.category = categoryDoc._id; // Assign ObjectId
        } catch (error) {
            console.error("Error finding category:", error);
            return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
        }
    }

    if (technologies) {
        if (typeof technologies === "string") {
            try {
                updateData.technologies = JSON.parse(technologies);
            } catch (error) {
                console.error("Invalid JSON format for technologies:", technologies);
                return res.status(400).json(new ApiResponse(400, null, "Invalid JSON format for technologies"));
            }
        } else if (Array.isArray(technologies)) {
            updateData.technologies = technologies; // Already an array, so use as-is
        } else {
            return res.status(400).json(new ApiResponse(400, null, "Invalid data type for technologies"));
        }
    }
    

    console.log("Updated data:", updateData);

    const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

    if (!project) {
        console.log("Project not found:", req.params.id);
        return res.status(404).json(new ApiResponse(404, null, "Project not found"));
    }

    console.log("Project updated successfully:", project);
    return res.status(200).json(new ApiResponse(200, project, "Project updated successfully"));
});

/** ===========================
 * @desc Delete Project
 * @route DELETE /api/projects/:id
 * @access Admin
 =========================== */
 export const deleteProject = asyncHandler(async (req, res) => {
    console.log("Received request to delete project:", req.body);

    const { projectIds } = req.body;
    console.log(projectIds)
    if (!projectIds || !projectIds.length) {
        console.log("No project IDs provided.");
        return res.status(400).json(new ApiResponse(400, null, "No project IDs provided"));
    }

    const deletedProjects = await Project.deleteMany({ _id: { $in: projectIds } });

    if (deletedProjects.deletedCount === 0) {
        console.log("No projects found to delete.");
        return res.status(404).json(new ApiResponse(404, null, "No projects found to delete"));
    }

    console.log("Projects deleted successfully:", projectIds);
    return res.status(200).json(new ApiResponse(200, null, "Projects deleted successfully"));
});

export const showcaseProjects = asyncHandler(async (req, res) => {
    const categoryName = req.params.categoryName;

    console.log(categoryName)
    const category = await Category.findOne({ slug: categoryName });
    console.log(category)
    if (!category) {
        return res.status(404).json(
            new ApiResponse(404, null, "Category not found")
        );
    }

    
    const project = await Project.findOne({ category: category._id });
    console.log(project)

    if (!project) {
        return res.status(404).json(
            new ApiResponse(404, null, "Project not found in this category")
        );
    }

    return res.status(200).json(new ApiResponse(200, project));
});
