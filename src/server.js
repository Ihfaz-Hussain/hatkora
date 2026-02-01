// Import the Express library 
const express = require("express");
const restaurants = require("./data/restaurants")
const hotels = require("./data/hotels")
const attractions = require("./data/attractions")
// Create a new Express application
const app = express();


// Define a route that responds to GET requests at "/health"
//Used to check if the server is running
app.get("/health", function (req, res) {
  // Send back a JSON response indicating the server is healthy
  res.json({ ok: true });
});

app.get("/hotels", function(req,res) {
  let result = hotels;
  const locationQuery = req.query.location;

  if(locationQuery !== undefined){
    //convert query to lowercase for case insensitivity
    const q = locationQuery.toLowerCase()
    //store the filtered array based on price 
    const filtered = [];

    for(let i = 0; i < result.length; i++){
      const h = result[i]
      const loc = h.location.toLowerCase();

      if(loc.includes(q)){
        filtered.push(h)
      }
    }
    result = filtered
  }

  res.json(result)

} );

app.get("/restaurants", function(req,res){
  // Read the 'maxAvg' filter sent by the client in the URL (e.g. ?maxAvg=5000)
  const maxAverageStr = req.query.maxAvg;
  let result = restaurants;

  if(maxAverageStr !== undefined){
    //convert maxaverage to number
    const maxAverage = Number(maxAverageStr);
    if(Number().isNaN(maxAverage)){
      return res.status(400).json({error: "maxavg must be a number"});
    }
    //initialize empty string to store max_average results
    result = [];

    //iterate through thre restaurant array
    for(let i = 0; i< restaurants.length; i++){
      const r = restaurants[i];
      const avg = (r.priceMin + r.priceMax) /2;
      if(avg <= maxAverage){
        result.push(r);
      }
    }
  }
  console.log(req.query);
  res.json(result);
});

// Set the port number where the server will listen for requests
const PORT = 3000;

// Start the server and listen for incoming requests on the specified port
app.listen(PORT,function(){
    console.log("Server is running at " + PORT)
});