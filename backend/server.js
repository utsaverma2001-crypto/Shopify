import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://utsav_23:1234abcd@cluster0.pic0u.mongodb.net/ShopifyDatabase?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
} ).then(()=>{
    console.log('MongoDB connected')
}).catch((err)=>{
    console.log("error in connecting to database")
})


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);

app.get('/',(req,res)=>{
    res.send('SERVER is ready');
});
app.use((err,req,res,next)=>{
 res.status(500).send({message:err.message})
})
const PORT= process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('Server started')
})