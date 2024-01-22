const mongoose = require("mongoose");

// Wrap local connection to MongoDB within Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/mongoosePracticeDB", {
    /**
    useNewUrlParser: true, // deprecated and not needed since Node.js v4
    useUnifiedTopology: true, // deprecated and not needed since Node.js v4
     */
});

// export connection
module.exports = mongoose.connection;