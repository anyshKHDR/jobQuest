import mongoose from "mongoose";

const recruiterRegisterSchema = mongoose.Schema({
    email: String,
    phone: Number,
    password: String,
    confirmPassword: String,
    businessName: String,
    industry: String,
    address: String,
    website: String,
    logo: String
})

const RecruiterRegister = mongoose.model("RecruiterRegister", recruiterRegisterSchema);
export default RecruiterRegister;