import express from 'express';
import Service from '../models/serviceModel';
import { getToken } from '../util';

const router = express.Router();

router.get("/", async(req,res)=>{
    const serviceproviders = await Service.find({});
    res.send(serviceproviders);

});

router.get("/:id", async(req,res)=>{
    const serviceprovider = await Service.findOne({_id: req.params.id});
    if(serviceprovider){
        res.send(serviceprovider);
    }
    else{
        res.status(404).send({message:" Service provider not found"})
    }
});


router.get("/:1", async(req,res)=>{
    const serviceproviders = await Service.find({id: req.params.id});
    if(serviceproviders){
        res.send(serviceproviders);
    }
 else{
     res.status(404).send({message: "not found"})
 }

});

router.post("/", async(req, res)=>{
    const serviceprovider = new Service({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        countInStock: req.body.countInStock,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description,
        reviews: req.body.reviews
    });

    const newService = await serviceprovider.save();
    if(newService){
        return res.status(201).send({message:'New Service provider added', data: newService});
    }
    return res.status(500).send({message: ' Error in Creating profile'})
})

router.put("/:id", async(req, res)=>{
    const productId= req.params.id;
    const product = await Service.findById(productId);
    if(product)
    {
        product.name= req.body.name,
        product.image= req.body.image,
        product.category= req.body.category,
        product.countInStock=req.body.countInStock,
        product.price=req.body.price,
        product.rating=req.body.rating,
        product.description= req.body.description,
        product.reviews= req.body.reviews

        const updatedService = await product.save();
        if(updatedService){
           return res.status(200).send({message:'Service Provider updated', data: updatedService});
        }
        return res.status(500).send({message: ' Error in updating'})
    }
 
})
router.delete("/:id", async (req,res)=>{
    const deleteService = await Service.findById(req.params.id);
    if(deleteService){
        await deleteService.remove();
        res.send({message: "Service provider deleted"});
    }
    else{
        res.send("Error in Deletion");
    }
});
export default  router;