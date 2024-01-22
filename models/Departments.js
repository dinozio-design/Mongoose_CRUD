const mongoose = require("mongoose");
// importing error handler function
const { handleError } = require("../util/errorHandler");

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastAccessed: {
        type: Date,
        default: Date.now,
    },
});

const Departments = mongoose.model("Departments", departmentSchema);

// this is written with an asynchronouse functional scope which makes the code cleaner and 
// easier with error handling.
async function insertDepartmensIfEmpty() {
    try {
        const collection = await Departments.find({}).exec();

        if (collection.length === 0) {
            // insert departments if the collection is empty
            const results = await Departments.insertMany([
                { name: "Produce" },
                { name: "Dairy" },
                { name: "Meat" },
                { name: "Wine" },
                { name: "Flowers" },
                { name: "Bakery" },
                { name: "Seafood" },
                { name: "Pharmacy" },
            ]);
            console.log("Departments inserted", results);
        } else {
            console.log("DB is already populated");
        };
    } catch (err) {
        // using the error handling module to handle any error
        handleError(err);
    }
};

insertDepartmensIfEmpty();

module.exports = {
    Departments
};