import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}))
//limit the payload
app.use(express.urlencoded({extended:true,limit:"16kb"}))//url 

app.use(express.static("public"))

app.use(cookieParser())


//routes
import userRouter from "./routes/user.routes.js"

// https://localhost:8000/api/v1/users/register
//routes declaration
app.use("/api/v1/users",userRouter)





export { app }