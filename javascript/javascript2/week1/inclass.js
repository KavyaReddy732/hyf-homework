const favoriteDishes = [
    "Rice",
    "Chicken",
    "pizza",
    "pasta",
    "egg"
    ];
    const pageBody = document.querySelector("body");
    console.log(pageBody);
    const varUl = document.createElement("ul");
    varUl.innerText = "My favorite dishes:";
    pageBody.appendChild(varUl);
    
    for (let i = 0; i < favoriteDishes.length; i++) {
    let dishInList = document.createElement("li");
    dishInList.innerText = favoriteDishes[i];
    varUl.appendChild(dishInList);
    }

//////////podcast////////////
const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];
    const pageBody = document.querySelector("body");
    const list = document.createElement("ul");
    list.innerHTML = `<h1>  Podcasts Names  </h1> `;
    pageBody.appendChild(list);
    
    for(let i = 0; i < podcasts.length; i++){
        let podcastLi = document.createElement('li');
        let podcastName = document.createElement('h1');
        podcastName.innerHTML = podcasts[i].name;
        list.appendChild(podcastLi);
        podcastLi.appendChild(podcastName);
    
        if(podcasts[i].imageUrl){
          let image = document.createElement('img');
          image.src= podcasts[i].imageUrl;
          podcastLi.appendChild(image);
        };
      };

////addeventlistner//////
const simpleEventListener = document.createElement("h1");
simpleEventListener.innerText = "Simple eventlistener";
pageBody.appendChild(simpleEventListener);

const button = document.createElement("button");
button.innerText = "click me";
button.addEventListener("click", buttonClicked);
pageBody.appendChild(button);

function buttonClicked() {
  button.innerText = "button clicked!";
}
