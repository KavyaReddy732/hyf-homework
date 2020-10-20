const promise1 = fetch('https://api.github.com/search/repositories?q=user:shruthidasarapu');
const promise2 = fetch('https://api.github.com/search/repositories?q=user:valmdz')
const promise3 = fetch('https://api.github.com/search/repositories?q=user:kamalrsa')

  
  Promise.all([promise1, promise2, promise3])
  .then((files) => {
    return Promise.all(files.map((response) => response.json()));
  })
  .then((data) => {
    //console.log(data);

    const body = document.querySelector("body");
    data.forEach((repository) => {
      console.log(repository)
      let ul = document.createElement("ul");
      body.appendChild(ul);
      repository.items.forEach((user) => {
        let li = document.createElement("li");
        li.innerHTML = 
        `<div>Owner: ${user.owner.login}</div>
         <div>Name: ${user.full_name}</div>
         <div>URL: ${user.owner.url}</div> `;
        ul.appendChild(li);
      });
    });
  })
