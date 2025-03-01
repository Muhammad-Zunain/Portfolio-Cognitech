import mongoose from "mongoose";
import slugify from "slugify";
import Project from "./project.model.js"; // Import Project model

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

// Generate slug before saving
categorySchema.pre("save", function (next) {
  if (!this.slug || this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

// Delete related projects when category is deleted
categorySchema.pre("deleteOne", { document: true }, async function (next) {
  await Project.deleteMany({ category: this._id });
  next();
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
