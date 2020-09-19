var countL = 0;
var countS = 0;
input = document.querySelector('input');
scoreS = document.getElementById("scoreS");
scoreL = document.getElementById("scoreL");
button = document.querySelector("button");
const form = document.getElementById('game-start-form')


const game = (e)=>{
    if (e.code === 'KeyL') {
        countL++
        scoreL.innerHTML = countL;
      }
    
      if (e.code === 'KeyS') {
        countS++
        scoreS.innerHTML = countS;
      }
    }
const startTimer = (duration) => {
    document.addEventListener('keypress', game)
  
    setTimeout(() => {
      document.removeEventListener('keypress', game)
      if (countS > countL) {
        scoreS.innerHTML = 'WINNER'
      } else if (countL > countS) {
        scoreL.innerHTML = 'WINNER'
      } else {
        scoreS.innerHTML  = 'TIE'
        scoreL.innerHTML  = 'TIE'
      }
    }, duration * 1000)
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('duration')
  
    if (input.value > 0) {
      duration = input.value
      startTimer(input.value)
      //input.value = undefined
    }
  })
  

