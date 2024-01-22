// this is the separation of concern
// separating error handling to its own module
// to be used by all models and codes

const handleError = (err)=>{
    console.error(err);
};

module.exports = {handleError};
