// Movies API//
async function movie() {
        const movies = await fetch(
            "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
        );

    const moviesArray = await movies.json()
    const badMovies=moviesArray.filter(element => element.rating < 6 && element.year > 2000)
    .map(element => element);
    console.log(badMovies)
}
movie()



//Async Function//

async function afterSetTime(resolveAfter){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('I am called asynchronously')
        },resolveAfter*1000);
    });
    let result = await promise; 
    console.log(result);
}

afterSetTime(8)



//ReWrite Time////

function setTimeoutPromise(timeToLog){
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve ('Called after 3 seconds');
        }, timeToLog*1000);
    })
    .then((data) => {
    console.log(data);
    });
}
setTimeoutPromise(3)


///GeoLocation////
function getCurrentLocation(){
    let geoLocation = new Promise((resolve, reject) =>{
        navigator.geolocation.getCurrentPosition(
            position=>{resolve (position.coords)}
        )
    })
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });
}
getCurrentLocation()

///////////////////

function promiseThen(){
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve (fetch('https://randomfox.ca/floof/'))
            }, 3000);
        })
  .then(response => response.json()) //this goes into the promise
  .then(data => {
     console.log(data)
  })
}
promiseThen()

////////////////////

async function asyncAwait(){
    const response = await fetch('https://randomfox.ca/floof/');
    const data = await response.json()
    let promise = await new Promise((resolve) => {
                    setTimeout(() => resolve(data), 3000);
                })
    console.log(promise)
    
}
asyncAwait()
