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