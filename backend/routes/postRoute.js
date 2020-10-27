import express from 'express';
import postTask from '../models/postTask';



const router = express.Router();

router.post("/posttask", async(req, res)=>{
    const task = new postTask({
        title: req.body.title,
        category: req.body.category,
        location: req.body.location,
        budget: req.body.budget,
        description: req.body.description,
    
    });

    const newTask = await task.save();
    if(newTask){
        return res.status(201).send({message:'New task added', data: newTask});
    }
    return res.status(500).send({message: ' Error in posting task'})
})


export default router;