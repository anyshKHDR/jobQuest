import mongoose from "mongoose";

const JobPostSchema = mongoose.Schema({
    businessName:String,
    businessId:String,
    jobTitle: String,
    description: String,
    qualification: String,
    skills: String,
    experience: String,
    location:  String,
    salary:  String,
    contractType:  String,
    deadline:  Date,
    phone: Number,
    email: String,
    postDate:String,
    businessAddress:String,
    jobCategory:String
})

const JobPost = mongoose.model("JobPost", JobPostSchema);
export default JobPost;