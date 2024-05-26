import RecruiterRegister from "../models/recruiterRegister.js";
import JobPost from "../models/jobPostSchema.js";
import RecruiterJobApplication from "../models/recruiteJobApplicationSchema.js";
import { application } from "express";
import UserRegister from "../models/userRegisterSchema.js";

//register new company
export const postRecruiterRegister = async (req, res) =>{
    const data = req.body;
    // console.log(data);
    const newRecruiter = new RecruiterRegister(data);
    try{
        const recruiter = await newRecruiter.save();
        const jobApplicationList = new RecruiterJobApplication({businessId:recruiter._id, applications:[]});
        await jobApplicationList.save();
    }catch(error){
        console.error(error);
    }
};

//login
export const getLoginData = async (req,res) => {
    // console.log(req.body);
    const data = req.body;
    try{
        const logingCredentials = await RecruiterRegister.find({email:data.email}, {email:1, password:1, businessName:1})
        // console.log(logingCredentials.length);
        res.send(logingCredentials)
    }catch(error){
        console.error(error)
    }
}

//new job posting
export const newPost = async( req, res) =>{
    const data = req.body;
    // console.log(data);
    const newPost =  new JobPost(data);
    try{
        await newPost.save();
    }catch(error){
        console.error(error.message);

    }
};

export const getPostList = async(req, res) => {
    try{
        const postListData = await JobPost.find() 
        res.send(postListData);
        // console.log("**********GET CURRENT POST ********");
        // console.log(postListData)
    }catch(error){
        console.error(error);
    };
}

export const getBusinessDetail = async(req, res) =>{
    const id = req.query.id;
    // console.log(id)
    try{
        const businessDetail = await RecruiterRegister.find({_id:id})
        // console.log(businessDetail[0])
        res.send(businessDetail[0]);
    }catch(error){
        console.error(error)
    }
}

export const deletePost =  async (req, res) =>{
    const id = req.params.postId;
    const businessId = req.params.businessId;
    try{
        const deletePost = await JobPost.deleteOne({_id:id});
        if(deletePost.deletedCount > 0){
            const postListData = await JobPost.find({businessId:businessId})
            // console.log(postListData);
            res.status(200).json(postListData);
        }else{
            res.status(404);
        }
    }catch(e){
        console.error(e);
    }
}

export const getSelectedPost = async (req, res) =>{
    const id = req.params.postId;
    try{
        const getPost = await JobPost.find({_id:id});
        res.send(getPost);
    }catch(error){
        console.log(error)
    }
};

export const getApplications = async (req, res) => {
    const businessId = "66238f518f321fd7208840a2";
    try{
        const applicationObj = await RecruiterJobApplication.findOne({businessId:businessId},{applications:1})
        const applications = applicationObj.applications;
        // console.log(applications);

        const detailedApplications = await Promise.all(applications.map(async (application) => {
            const jobPost = await JobPost.findById(application.postId, { jobTitle: 1 }).lean();
            const user = await UserRegister.findById(application.userId, {
                fName: 1, phone: 1, linkedIn: 1, github: 1, currentLocation: 1, qualification: 1, skills: 1, workExperience: 1
            }).lean();

            return {
                postName: jobPost.jobTitle,
                userDetails: {
                    fName: user.fName,
                    phone: user.phone,
                    linkedIn: user.linkedIn,
                    github: user.github,
                    currentLocation: user.currentLocation,
                    qualification: user.qualification,
                    skills: user.skills,
                    workExperience: user.workExperience
                }
            };
        }));

        console.log(detailedApplications);
        res.send(detailedApplications);

    }catch(error){
        console.log(error);
    };
}