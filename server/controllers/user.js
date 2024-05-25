import UserRegister from "../models/userRegisterSchema.js"
import JobPost from "../models/jobPostSchema.js";

export const userRegister = async (req, res)=>{
    const data = req.body;
    const newUser = new UserRegister(data);
    // console.log(req.body)
    try{
        await newUser.save();
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

        // console.log(categories);

        const filterJob = await JobPost.find({jobCategory: categories});
        res.send(filterJob);
        
    }catch(err){
        console.log(err)
    };
}