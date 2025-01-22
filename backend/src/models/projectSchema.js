import mongoose, { Schema } from "mongoose";
import slugify from 'slugify';

// Schema for extra section
const extraSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, unique: true },
});

extraSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const serviceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: Array, required: true },
  images: [{ type: String, required: true }],
});

const categorySchema = new Schema({
  extra: extraSchema,
  service: [serviceSchema],
});

// Main projects schema
const projectsSchema = new Schema({
  frontend: categorySchema,
});

const Projects = mongoose.model("Projects", projectsSchema);
const categorySch = mongoose.model("categorySchema", categorySchema);
const service = mongoose.model("serviceSchema", serviceSchema);
const extraSch = mongoose.model("extraSchema", extraSchema);

export { Projects, categorySch, service, extraSch };
