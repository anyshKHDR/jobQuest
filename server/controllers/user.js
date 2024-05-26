import UserRegister from "../models/userRegisterSchema.js"
import JobPost from "../models/jobPostSchema.js";
import UserJobApplication from "../models/userJobApplicationSchema.js";
import RecruiterJobApplication from "../models/recruiteJobApplicationSchema.js";
import { application } from "express";

export const userRegister = async (req, res)=>{
    const data = req.body;
    const newUser = new UserRegister(data);
    // console.log(req.body)
    try{
        await newUser.save();
        const jobApplicationList = new UserJobApplication({userId:newUser._id, applications:[]});
        await jobApplicationList.save();
    }catch(error){
        console.log(error);
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try{
        const userData = await UserRegister.find({email:email, password:password}, {email:1, password:1, fName:1})
        res.send(userData);
        // console.log(userData);
    }catch(error){

    }
};

export const userFeedData = async (req, res) =>{
    const id = req.params.id;
    try{
        const getUser = await UserRegister.find({_id:id})
        const categories = getUser[0].jobCategory;
        const filterJob = await JobPost.find({jobCategory: categories});
        res.send(filterJob);
    }catch(err){
        console.log(err)
    };
}

export const userJobApply = async (req, res) =>{
    const {userId, postId, date, businessId} = req.body;
    const newRecruiterApplication = {userId:userId, postId:postId, date:date, status:"pending", message:""};
    const newUserApplication = {businessId:businessId, postId:postId, date:date, status:"pending", message:""};
    try{
        //BUSINESS APPLICATION LIST
        const recruiterApplicationList = await RecruiterJobApplication.findOne({businessId:businessId});
        recruiterApplicationList.applications.push(newRecruiterApplication);
        await recruiterApplicationList.save();

        //USER APPLICATION LIST
        const userApplicationList = await UserJobApplication.findOne({userId:userId});
        userApplicationList.applications.push(newUserApplication);
        await userApplicationList.save();

    }catch(err){
        console.log(err)
    };
}