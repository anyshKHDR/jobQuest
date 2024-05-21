import UserRegister from "../models/userRegisterSchema.js"

export const userRegister = async (req, res)=>{
    const data = req.body;
    const newUser = new UserRegister(data);
    // console.log(req.body)
    try{
        await newUser.save();
    }catch(error){
        console.log(error);
    }
}