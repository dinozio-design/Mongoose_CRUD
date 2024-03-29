const express = require("express");
const db = require("./config/connection");

// requiring the models:
const { Genre, Departments } = require("./models");

// importing error handling module
const { handleError } = require("./util/errorHandler.js");


// Setting up the server port
// we are using .env here to make sure that the environment variables are properly handled
const PORT = process.env.PORT || 3001;
const app = express();

// Enabling the Express.js application to understand form data sent in the body of HTTP POST requests
// The { extended: true } option allows for parsing complex objects and arrays within the form data.
app.use(express.urlencoded({ extended: true }));

// Configuring middleware to parse incoming requests with JSON payloads. 
// It enables your Express.js application to understand JSON data sent in the body of HTTP requests.
app.use(express.json());


/**  ... queries and CRUD will go here ... */

// CRUD Operation to find all departments asynchronously
app.get("/all-departments", async (req, res) => {
    try {
        // Query all documents from the 'Department' collection using Mongoose's 'find' method
        const results = await Departments.find({});
        // Set the HTTP status code of the response to 200 (OK)
        // Send the 'results' as a JSON response to the client
        res.status(200).json(results);
        console.log(`following results were found: ${results}`);
    }
    catch (err) {
        handleError(err);
        res.status(500).json({error:"Something went wrong, check the console for error detail"});
    }
});




// Setting up a listener for the MongoDB database connection and, 
// once the connection is open, starting the Express.js server to handle incoming requests.

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server is now runnign on port ${PORT}`);
    });
});