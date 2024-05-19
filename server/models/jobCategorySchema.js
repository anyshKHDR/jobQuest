import mongoose from "mongoose";

//Allows dynamic keys. No strict schema enforced
const JobCategorySchema = mongoose.Schema({}, {strict: false});

const JobCategory = mongoose.model("JobCategory", JobCategorySchema);
export default JobCategory;