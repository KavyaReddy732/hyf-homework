const promise1 = new Promise((resolve, reject) => { 
    resolve(moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300}))
    
})
const promise2 = new Promise((resolve, reject) => { 
    resolve(moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300}))
    
})
const promise3 = new Promise((resolve, reject) => { 
    resolve(moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20}))
    
})


function translateOneByOne(){
    setTimeout(()=>{
        promise1.then(()=>console.log('Element has been moved'))  
    },1000);
    setTimeout(()=>{
        promise2.then(()=>console.log('Element has been moved'))  
    },2000);
    setTimeout(()=>{
        promise3.then(()=>console.log('Element has been moved'))  
    },3000);
} 
translateOneByOne()

function translateAllAtOnce(){
    Promise.all([promise1, promise2, promise3]).then(() => {
        console.log('Elements has been moved');
      });
}
translateAllAtOnce()