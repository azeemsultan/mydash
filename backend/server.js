import express from 'express';
import data from './data';
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute'
import serviceRoute from './routes/serviceRoute'
//import fileUpload from 'express-fileupload';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app= express();


app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/serviceproviders", serviceRoute);
/*
app.get("/api/serviceprovider/:id" , (req,res) => {
    const serviceId = req.params.id;
    const serviceprovider = data.serviceproviders.find( x=> x._id=== serviceId);
    if(serviceprovider)
    res.send(serviceprovider)
    else
    res.status(404).send({msg: "not found."})
  
});
*/



app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")});