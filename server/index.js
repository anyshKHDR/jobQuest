import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import recruiterRoutes from "./routes/recruiter.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recruiter", recruiterRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>app.listen(process.env.PORT, ()=>console.log(`Server runnig on port ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));