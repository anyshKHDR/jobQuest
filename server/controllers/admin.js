import JobCategory from "../models/jobCategorySchema.js";

export const newJobCategory = async(req, res)=>{
    // console.log(req.body.jobs);
    const data = req.body;
    const category = data.category;
    const jobs = data.jobs;
    const newJobCategory = new JobCategory({
        [category]:jobs
    })

    try{
        await newJobCategory.save();
    }catch(error){
        console.error(error);
    }
}