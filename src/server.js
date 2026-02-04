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

//hotels 
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

app.get("/attractions", function(req,res){
  let result = attractions

  //Filter : Location by partial match 
  //attrraction?location = bis should give bisanakandi 
  const locationStr = req.query.location;
  if(locationStr !== undefined){
    const q = locationStr.toLowerCase()
    const filtered = [];

    for(let i = 0; i<result.length; i++){
      //store each element as a 
      const a = result[i]
      //extract location for each element 
      const loc = a.location.toLowerCase();
      if(loc.includes(q)){
        filtered.push(a)
      }
    }

    result = filtered;
  }

  //Filter: category by partial match 
  const categoryStr = req.query.category;
  if(categoryStr !== undefined){
    const q = categoryStr.toLowerCase();
    const filtered = [];
    for(let i = 0; i < result.length; i++){
      const a = result[i];
      const cat = a.category.toLowerCase()

      if(cat.includes(q)){
        filtered.push(a);
      }
    }

    result = filtered;
  }

  //Filter : maxPrice using averagecost 

  const maxPriceStr = req.query.maxPrice;
  if(maxPriceStr !== undefined){
    const maxPrice = Number(maxPriceStr);
  }

  if(isNaN(maxPrice)){
    res.status(400).json({error: "maxPrice must be a number"});
    return;
  }
  const filtered = [];
  for(let i = 0; i < result.length; i++){
    const a = result[i]
    const avg = (a.priceMin + a.priceMax) / 2

    if(avg <= maxPrice){
      filtered.push(a)
    }
  }

  result = filtered;

  //sort by ascneding or descendindg prices
  const sort = req.query.sort;
  if(sort!== undefined){
    result = result.slice();

    result.sort(function(a,b){
      const avgA = (a.priceMin+a.priceMax)/2
      const avgb = (b.priceMin+b.priceMax)/2
      
      //Ascending 
      if(sort == "priceAsc"){
        return avgA - avgB
      }

      //Descending
      if(sort == "priceDesc"){
        return avgB - avgA
      }

      // If sort value is unknown, keep original order
      return 0;
    })
  }

})

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