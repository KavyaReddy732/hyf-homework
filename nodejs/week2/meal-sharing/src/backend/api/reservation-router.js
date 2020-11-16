const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
    try {
      response.send(reservations);
    } catch (error) {
      throw error;
    }
  });
  router.get("/:id", async (request, response) => {
      const reservationToFind = parseInt(request.params.id);
      if(!isNaN(reservationToFind)){
      const reservationWithId = reservations.filter((reservation) =>  reservation.id === reservationToFind);
      response.send(reservationWithId[0]); 
      }
      else{
        response.status(400)
        response.send(`there is no meal with this id `);
    }
  });
  
  module.exports = router;