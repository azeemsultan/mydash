import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    countInStock: {type: Number, default: 0 , required: true},
    price: {type:Number, default: 0 , required:true},
    rating: {type: Number, default:0},
    description: {type: String, required:true},
    reviews: {type: Number, default: 0, }

    
});

const postTask = mongoose.model("postTask", postSchema);

export default postTask;