import mongoose from "mongoose";

// local connection to MongoDB wraped in mongoose
mongoose.connect("mongodb://127.0.0.1:27017/mongooseCRUDPracticesDB");

// exporting connection
export default mongoose.connection;