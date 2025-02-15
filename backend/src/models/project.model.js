import mongoose from "mongoose";
import slugify from 'slugify';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }], // Array of technologies used
    images: [{ type: String, required: true }], // Array of image URLs
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Category", // Reference to the Category model
      required: true 
    },
    // slug: { type: String, unique: true },
  },
  { timestamps: true }
);



const Project = mongoose.model("Project", projectSchema);
export default Project;
