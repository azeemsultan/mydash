import express from 'express';
import data from './data';


const app= express();

app.get("/api/serviceproviders/:id" , (req,res) => {
    const productId = req.params.id;
    const serviceprovider = data.serviceproviders.find( x=> x._id=== productId);
    if(serviceprovider)
    res.send(serviceprovider)
    else
    res.status(404).send({msg: "not found."})
  
});



app.get("/api/serviceproviders",(req,res) => {
    res.send(data.serviceproviders)
});


app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")});