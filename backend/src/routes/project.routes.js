import express from "express";
import { getProjects, addProject, updateProject, deleteProject, showcaseProjects, allProjects } from "../controllers/project.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; 

const router = express.Router();

router.get("/get-project", getProjects);
router.post("/add-project", upload.array("images", 5), addProject);
router.put("/update-project/:id", upload.array("images", 5), updateProject);
router.delete("/delete-project/:id", deleteProject);
router.post("/delete-projects", deleteProject);
router.get('/showcase-projects/:categoryName', showcaseProjects);
router.get('/all-projects', allProjects);

export default router;
