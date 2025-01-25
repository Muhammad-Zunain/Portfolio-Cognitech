import { Router } from "express";

// Correctly importing the controller
import showcaseProjects from "../controllers/projects.controllers.js";
import postProject from "../controllers/projectPost.controllers.js";
import addService from "../controllers/addServiceCate.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const showRouter = Router();

console.log(showcaseProjects)
// Ensure route is correct
showRouter.get('/showcase-projects/:serviceName', showcaseProjects);
showRouter.post('/post-projects', upload.array('files', 10), postProject)
showRouter.post('/add-service', addService)


export default showRouter;
