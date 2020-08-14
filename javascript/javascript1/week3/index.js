/////////Item array removal/////
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

names.splice(1, 1);

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


/////////////////When will we be there??///

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timetoReach(travelInformation){
     const duration = travelInformation.destinationDistance / travelInformation.speed;
      
      const hours = Math.floor(duration);
      const minutes = Math.round((duration - hours) * 60);
      return `${hours} hours ${minutes} minutes`;
  }
  const travelTime = timetoReach(travelInformation)
      
  console.log(travelTime); 

  /////////Series duration of my life

  const seriesDurations = [
    {
      title: 'Greys Anatomy',
      days: 10,
      hours: 19,
      minutes: 26,  
    },
    {
      title: 'Dark',
      days: 15,
      hours: 20,
      minutes: 44,
    },
    {
      title: 'Friends',
      days: 22,
      hours: 16,
      minutes: 4,
    }
  ]
    let avgLifeTime =  80 * 365  

  function logOutSeriesText() {
    let totalpercentage=0;
    for(let i=0; i<seriesDurations.length; i++){
    let totalTime = (seriesDurations[i].days) + 
    (seriesDurations[i].hours/24) + (seriesDurations[i].minutes/1440);
    let percentage = (totalTime/avgLifeTime)*100;
    console.log(
      `"${seriesDurations[i].title}" took ${percentage.toFixed(3)}% of my life.`)
      totalpercentage += (totalTime/avgLifeTime)*100;
    }
    
    console.log (`In total that is ${totalpercentage.toFixed(3)} % of my life`);
  }
  
  logOutSeriesText(); 

  ////////////////////NOnoN0nOYes (Note taking app)

  const notes = [];

function saveNote(content, id) {
  notes.push({
      content ,
      id,
  })
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes);

function getNote(id) {
  for(let i=0; i < notes.length; i++){
    if(notes[i].id === id){
    return  notes[i]
  }
  else {
     return `error: id is not found`
  }
}
}

const firstNote = getNote(1); 
console.log(firstNote); 

function logOutNotesFormatted() {
  for(let i=0; i < notes.length; i++){
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)
  }
}
logOutNotesFormatted();


////////////CactusIO-interactive (Smart phone usage app)
let activities = [];
function addActivity(date, activity, duration)
{
    let object = 
    {
     date :  date,
     activity : activity,
     duration : duration,
    };
    
    if(typeof(activity) === "string" && typeof(date) === "string" && typeof(duration) === "number"){
    activities.push(object);
    }
    else{
          console.log("types doesn't match");
    }
}
addActivity('14/8-20', 'Youtube', 30);
addActivity('14/8-20', 'netflix', 20);
console.log(activities);

function showStatus(activities){
    let num = activities.length;
    let totalDuration = 0;
    let limit = 100;
    for(let i=0;i<num;i++)
        {
            totalDuration += activities[i].duration; 
            
        }
        console.log(`You have added ${activities.length} activites.They amount ${totalDuration} min. of usage.`)
    if(totalDuration > limit){
        console.log('You have reached your limit, no more smartphoning for you!');
    }
    else{
        console.log('You can watch for a while more');
    }
  }
  showStatus(activities)
