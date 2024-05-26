import mongoose, { Schema } from "mongoose";

const RecruiterJobApplicationSchema = mongoose.Schema({
    businessId:String,
    applications:[
        {
            userId:String,
            postId:String,
            date:String,
            status:String,
            message:String,
        }
    ]
});

const RecruiterJobApplication = mongoose.model("RecruiterJobApplication", RecruiterJobApplicationSchema);
export default RecruiterJobApplication;
