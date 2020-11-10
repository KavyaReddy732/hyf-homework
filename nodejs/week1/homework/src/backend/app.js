const express = require("express");
const app = express();

// import data here
const meal = require("../backend/data/meals.json"); 
const reviews = require("../backend/data/reviews.json"); 
const reservations = require("../backend/data/reservations.json");
const meals = meal.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId === meal.id);
    return meal;
});


app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
    response.send(meals);
});

app.get("/cheap-meals", async (request, response) => {
    response.send(meals.filter(meal => meal.price<50));
});

app.get("/large-meals", async (request, response) => {
    response.send(meals.filter(meal => meal.maxNumberOfGuests > 5));
});

app.get("/meal", async (request, response) => {
    response.send(meals[Math.floor(Math.random() * meals.length)]);
});

app.get("/reservations", async (request, response) => {
    response.send(reservations);
});

app.get("/reservation", async (request, response) => {
    response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;
