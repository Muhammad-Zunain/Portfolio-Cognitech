import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {
  Projects,
  categorySch,
  service,
  extraSch,
} from "../models/projectSchema.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const postProject = asyncHandler(async (req, res) => {
  //category is slug

  const { category, categoryName, title, desc, technologies } = req.body;

  if (!category || !title || !desc) {
    return res
      .status(201)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  console.log(req);
  console.log(category, categoryName, title, desc, technologies);

  // Process technologies input
  const techArray = Array.isArray(technologies)
    ? technologies
    : technologies.split(" ").filter(Boolean);

  if (!req.files || req.files.length === 0) {
    return res
      .status(201)
      .json(new ApiResponse(400, null, "No files uploaded"));
  }

  // Upload files to Cloudinary
  const serviceImages = await Promise.all(
    req.files.map(async (file) => {
      if (!file.path)
        return res
          .status(201)
          .json(new ApiResponse(400, null, "Invalid file provided"));
      return uploadOnCloudinary(file.path);
    })
  );

  //find extra
  let extra = await extraSch.findOne({
    slug: category,
  });

  let Category = null;

  if (!extra) {
    extra = await extraSch.create({
      name: categoryName,
      slug: category,
      description: desc,
    });
  }

  Category = await categorySch.findOne({
    extra: extra,
  });

  if (!Category) {
    Category = await categorySch.create({
      extra: extra,
      service: [],
    });
  }

  // Find project category
  let projectCategoryData = await Projects.findOne({
    "frontend.extra.slug": category,
  });

  if (!projectCategoryData) {
    projectCategoryData = await Projects.create({
      frontend: Category,
    });
  }

  // Create and save service
  const servicePro = await service.create({
    title,
    description: desc,
    technologies: techArray,
    images: serviceImages,
  });

  // Append the service to the category
  if (projectCategoryData.frontend.service) {
    projectCategoryData.frontend.service.push(servicePro);
  } else {
    projectCategoryData.frontend.service = [servicePro];
  }
  await projectCategoryData.save();

  const verified = await Projects.findById(projectCategoryData._id);

  return res
    .status(201)
    .json(new ApiResponse(201, "Project created successfully!"));
});

export default postProject;
