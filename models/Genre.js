import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    lastAccessed:{
        type: Date,
        default: Date.now
    }
});


export default Genre;
