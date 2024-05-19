import mongoose from "mongoose";

const newPostSchema = mongoose.Schema({
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
    businessAddress:String
})

const NewPost = mongoose.model("NewPost", newPostSchema);
export default NewPost;