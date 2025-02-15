import mongoose from "mongoose";
import slugify from 'slugify';

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true },
    slug: { type: String, unique: true}, 
  },
  { timestamps: true }
);

categorySchema.pre("save", function (next) {
  console.log("Before Saving Category:", this); // Debugging line

  if (!this.slug || this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
    console.log("Generated Slug:", this.slug); // Debugging line
  }

  next();
});


const Category = mongoose.model("Category", categorySchema);
export default Category;
