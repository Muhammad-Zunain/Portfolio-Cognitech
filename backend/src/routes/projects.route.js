import { Router } from "express";

// Correctly importing the controller
import showcaseProjects from "../controllers/projects.controllers.js";
import postProject from "../controllers/projectPost.controllers.js";
import {addService, allCategory, deleteCategories} from "../controllers/addServiceCate.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";


import adminAuth from "../middlewares/admin.middleware.js";

const showRouter = Router();

console.log(showcaseProjects)
// Ensure route is correct
showRouter.get('/showcase-projects/:serviceName', showcaseProjects);
showRouter.post('/post-projects', upload.array('files'), adminAuth ,postProject)
showRouter.post('/add-service', adminAuth ,addService)
showRouter.get('/all-category', allCategory)
showRouter.get('/delete-category', deleteCategories)


export default showRouter;
