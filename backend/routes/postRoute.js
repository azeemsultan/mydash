import express from 'express';
import postTask from '../models/postTask';



const router = express.Router();

router.post("/Newsfeed/newsfeed", async(req, res)=>{
    const task = new postTask({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        countInStock: req.body.countInStock,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description,
        reviews: req.body.reviews
    });

    const newTask = await task.save();
    if(newTask){
        return res.status(201).send({message:'New task added', data: newTask});
    }
    return res.status(500).send({message: ' Error in posting task'})
})
