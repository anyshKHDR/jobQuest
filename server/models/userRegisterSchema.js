import mongoose from "mongoose";

const UserRegisterSchema = mongoose.Schema({
    email: String,
    password: String,
    confirmPassword: String,
    fName: String,
    phone: String,
    linkedIn: String,
    github: String,
    currentLocation: String,
    jobCategory: [String],
    qualification: String,
    skills: String,
    workExperience: String,
    resume:String
})

const UserRegister = mongoose.model("UserRegister", UserRegisterSchema);
export default UserRegister;