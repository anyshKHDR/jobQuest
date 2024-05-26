import mongoose, { Schema } from "mongoose";

const UserJobApplicationSchema = mongoose.Schema({
    userId:String,
    applications:[
        {
            businessId:String,
            postId:String,
            date:String,
            status:String,
            message:String,
        }
    ]
});

const UserJobApplication = mongoose.model("UserJobApplication", UserJobApplicationSchema);
export default UserJobApplication;
