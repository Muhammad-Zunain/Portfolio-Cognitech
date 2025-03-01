import Category from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";



export const addCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;


  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    res.status(400);
    throw new Error("Category already exists");
  }


  const category = new Category({ name, description });
  await category.save();

  res.status(201).json(new ApiResponse(200, category, "Category successfully add"));
});


export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(201).json(new ApiResponse(200, categories, "Category successfully get"));
});


export const getCategoryById = asyncHandler(async (req, res) => {
  
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  res.status(201).json(new ApiResponse(200, category, f`Category successfully get by id ${req.params.id}`));
});


export const updateCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  let category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  category.name = name || category.name;
  category.description = description || category.description;

  await category.save();
  res.status(200).json(new ApiResponse(200, null, "successfully updated"))
});


export const deleteCategories = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  await category.deleteOne();
  
  res.status(200).json(new ApiResponse(200, null, "successfully deleted"))
});
 