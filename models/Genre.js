const mongoose = require("mongoose");
// this code is promise based and implement the error handling within the model
// I will write cleaner code in the other models that I will introduce
// this code is merely to showcase the different ways of writing the same model

// Defining a Mongoose schema for the 'Genre' model
const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastAccessed: {
        type: Date,
        default: Date.now
    }
});

// Creating a mongoose model named "Genre" based on schema defined in "genreSchem"
const Genre = mongoose.model("Genre", genreSchema);


// Defining a function named 'handleError' that takes an error ('err') as a parameter
// Loging the error to the console using console.error
const handleError = (err) => console.error(err);


// The following code will add data only if the collection is empty in order to prevent any duplicates
// note that more than one document may have the same value
Genre.find({})
    .exec()
    .then(collection => {
        if (collection.length === 0) {
            Genre.
                insertMany(
                    [
                        { name: "Kids" },
                        { name: "Kids" },
                        { name: "Kids" },
                        { name: "Romance" },
                        { name: "Mystery" },
                        { name: "Contemporary" },
                        { name: "Biography" },
                        { name: "Sci-Fi" },
                    ]
                )
                .then(console.log("Genre documents added"))
                .catch(err => handleError(err));
        }
    });


module.exports = Genre;
