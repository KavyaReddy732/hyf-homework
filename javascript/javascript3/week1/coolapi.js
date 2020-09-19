const body = document.querySelector("body")
fetch('https://cat-fact.herokuapp.com/facts')
  .then(response => response.json()) //this goes into the promise
  .then(facts => {
     console.log(facts.all) //displays the objects in console
    facts.all.forEach(element => {    //this loop around the array to get the value of key
      const div = document.createElement("div")
      div.innerHTML = element.text;  //displays the value in browser
      body.append(div)
    })
  })
