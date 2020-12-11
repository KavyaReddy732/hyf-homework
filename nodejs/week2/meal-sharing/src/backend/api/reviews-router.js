const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json"); 

router.get("/", async (request, response) => {
    try {
      response.send(reviews);
    } catch (error) {
      throw error;
    }
  });
  router.get("/:id", async (request, response) => {
      const reviewsToFind = parseInt(request.params.id);
      if(!isNaN(reviewsToFind)){
      const reviewWithId = meals.filter((review) =>  review.id === reviewsToFind);
      response.send(reviewWithId[0]); 
      }
      else{
        response.status(400)
        response.send(`there is no meal with this id `);
      }
  });
  
  module.exports = router;