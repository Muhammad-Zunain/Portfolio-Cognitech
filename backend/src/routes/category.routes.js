import express from "express";
import { getCategories, addCategory, updateCategory, deleteCategories } from "../controllers/category.controller.js";

const router = express.Router();

router.get("/get-category", getCategories);
router.post("/add-category", addCategory);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategories);;
router.post("/delete-categories", deleteCategories);

export default router;
