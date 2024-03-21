import "dotenv/config";
import exppress from "express";
import mongoose from "mongoose";
import cors from "cors";

import recruiterRoutes from "./routes/recruiter.js"

const app = exppress();

app.use(exppress.json());
app.use(cors());

app.use("/recruiter", recruiterRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>app.listen(process.env.PORT, ()=>console.log(`Server runnig on port ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));