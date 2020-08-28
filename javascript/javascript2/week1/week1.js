let spiritAnimal = [
   'bat','bear','butterfly','cat','crow','deer','dog','dolphin','Dragon','Eagle',
   'Fox','Frog','Horse','Hummingbird','Jaguar','Ladybug','Lion','Owl','Panther','Rabbit',
   'Sheep','Snake','Spider','Swan','Tiger','Turkey','Turtle','Whale','wolfe'
];

const button = document.querySelector('button');
button.addEventListener('click', function () {
  let inputName = document.getElementById('name').value;
  if(inputName){
  let animal = Math.floor(Math.random() * spiritAnimal.length);
  document.querySelector('div').innerHTML = `${inputName}-${spiritAnimal[animal]}`;
  }
  else{
   document.querySelector('div').innerHTML = `please enter your name`;
}
});
