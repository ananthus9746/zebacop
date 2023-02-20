const express = require('express')
const app=express() 
const mongoose =require('mongoose')
const dotenv =require("dotenv")
const morgan=require("morgan")
const cors =require('cors')
const connectDB=require('./config/db')
const AdminRouter = require('./routes/admin')
const UserRouter = require('./routes/user')
dotenv.config()
mongoose.set('strictQuery', false);
const fileupload= require( "express-fileupload");


//CONNECTING TO DB
connectDB()

//MIDDLEWEARS
app.use(cors())
app.use(morgan("common"))
app.use(express.json());

app.use(
    fileupload({
        createParentPath: true,
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//MAIN ROUTES
app.use('/admin',AdminRouter)

app.use('/',UserRouter)








app.listen(process.env.PORT,console.log("Server started at port:",process.env.PORT))