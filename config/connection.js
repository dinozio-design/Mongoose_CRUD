import mongoose from "mongoose";

// Wrap local connection to MongoDB within Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/mongoosePracticeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// export connection
export default mongoose.connection;