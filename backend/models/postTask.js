import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    location: {type: String, required: true},
    budget: {type: Number, default: 0 , required: true},
    description: {type: String, required:true},


    
});

const postTask = mongoose.model("postTask", postSchema);

export default postTask;