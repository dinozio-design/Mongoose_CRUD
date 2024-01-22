import mongoose from "mongoose";

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

const Genre = mongoose.model("Genre", genreSchema);
const handleError = (err)=> console.error(err);


// Following code will add data only if the collection is empty in order to prevent any duplicates
// note that more than one document may have the same value

Genre.find({})
    .exec()
    .then(collection =>{
        if(collection.length ===0){
            Genre.
            insertMany(
                [
                    {name:"Kids"},
                    {name:"Kids"},
                    {name:"Kids"},
                    {name:"Romance"},
                    {name:"Mystery"},
                    {name:"Contemporary"},
                    {name:"Biography"},
                    {name:"Sci-Fi"},
                ]
            )
            .catch(err =>handleError(err));
        }
    });


export default Genre;
