// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => {
    console.log("this script lodded after 2.5 seconds");
 }, 2500);


// Create a function that takes 2 parameters: delay and stringToLog. 
function click(delay, stringToLog) {
    setTimeout(() => {
       console.log(stringToLog);
    }, delay*1000);
    
}

click(5, "this string logged after 5 seconds");
click(3, "this string logged after 3 seconds");

// Create a button in html. When clicking this button,

const button = document.getElementById("click")
button.addEventListener("click", ()=>
setTimeout(() => {
    console.log("function called after 5 seconds")
}, 5000));

/*Create two functions and assign them to two different variables. 
One function logs out Earth, the other function logs out Saturn*/
 let earthLogger = ()=>{
    console.log ('earth');
 }
 let saturnLogger = ()=>{
    console.log('saturn');
}
 function planetLogFunction(logger){
    logger() ;
 }

planetLogFunction(earthLogger)
planetLogFunction(saturnLogger)

//Create a button with the text called "Log location".
let findMe = ()=>{
    navigator.geolocation.getCurrentPosition(position=>{
   const latitude  = position.coords.latitude;
   const longitude = position.coords.longitude;
   document.getElementById("latitude").innerHTML = `Latitude: ${latitude}`;
   document.getElementById("longitude").innerHTML = `Longitude: ${longitude}`;
 })
};
 document.getElementById('location').addEventListener('click', findMe);

//Create a function called runAfterDelay. It has two parameters: delay and callback.

function runAfterDelay(delay, callback) {
   setTimeout(() => {
      callback()
   }, delay*1000);
}

runAfterDelay(4, function(){
   console.log("should log after 4 seconds")
});

runAfterDelay(6, function(){
   console.log("should log after 6 seconds")
});
//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke

function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke)
{
   shouldTellFunnyJoke == true;
    if(shouldTellFunnyJoke){
        logFunnyJoke(shouldTellFunnyJoke);
    }
    else {
        logBadJoke(shouldTellFunnyJoke);
}


function logFunnyJoke(){
    console.log("funny joke");
}
function logBadJoke(){
 console.log("bad joke");
}
}
jokeCreator(true);
jokeCreator(false);

///Function as a variable
const games = ()=>{console.log("candycrush")}
const music = ()=>{console.log("melodies")}
const movies = ()=>{console.log("romcom")}

const favourites = [games,music,movies]
favourites.forEach((Element)=>Element())


const fun = function() { 
   console.log("function") 
}
fun();

const fun2 = ()=>{
  console.log (2*2);
}
const object = {
   key1 : fun(),
   key2 : fun2()
}


 


