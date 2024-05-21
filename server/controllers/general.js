import JobCategory from "../models/jobCategorySchema.js";

//get job category
export const getJobCategory = async (req, res) =>{
    try{
        const jobCategies = await JobCategory.find();
        res.send(jobCategies);
        // console.log(jobCategies);
    }catch(error){
        console.log(error)
    }
};