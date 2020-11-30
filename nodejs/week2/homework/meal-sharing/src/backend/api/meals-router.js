const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
    if(request.query.maxPrice){
      if(parseInt(request.query.maxPrice)){
      const maxPrice = meals.filter((meal) => meal.price < parseInt(request.query.maxPrice));
      response.send(maxPrice);
      }
      else{
        response.send("error!!,meal not fond")
      }
    }
    else if(request.query.title){
        response.send(meals.filter(meal => meal.title.toLowerCase().includes(title.toLowerCase())));
    }

    else if(request.query.createdAfter){
      if(!parseInt(request.query.createdAfter)){
        response.status(400)
        response.send(`There is no meal  `);
      }  
      else{
        const date = new Date(request.query.createdAfter)
          const mealWithDate = meals.filter((meal) => new Date.parse(meal.createdAt) > parse(date) )
        response.send(mealWithDate);
      }
    }
    else if(request.query.limit){
      if(isNaN(request.query.limit)){
        response.status(400)
        response.send(`There is no meal`);
      }  
      else{
        const limit = meals.filter((meal) => meals.indexOf(meal) < parseInt(request.query.limit))
        response.send(limit);
      }
    }
    else{
      response.send(meals);
    }
});
router.get("/:id", async (request, response) => {
    const mealToFind = parseInt(request.params.id);
    if(!isNaN(mealToFind)){
    const mealWithId = meals.filter((meal) =>  meal.id === mealToFind);
    response.send(mealWithId[0]); 
    }
    else{
      response.status(400)
      response.send(`there is no meal with this id `);
    }
});

module.exports = router;
