let name;
let todo = [];
function getReply(command){
    const arrayOfStrings = command.split(' ');
    const name = arrayOfStrings[3];
    const time = Number(arrayOfStrings[4]);
    const setTime = time * 60 * 1000;
   switch(command)
   {
       case `my name is ${name}`:
        return `nice to meet you ${name}` 

       case 'what is my name':
           return 'my name is kavya';
        
        case 'add fishing to my todo':
            todo.push(command);
            return 'fishing added to my todo'
           
        case 'Add singing in the shower to my todo':
            todo.push(command);
            return 'singing in the shower'
           
        case 'remove fishing from my todo':
            todo.shift();
            return 'fishing removed from todo';
            
        case 'What is on my todo?' :
            return  `${todo.length} - ${todo}`;
            
        case 'What day is it today?':
                let today = new Date();
                const day = today.getDate();
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                const month = today.getMonth(); 
                const year = today.getFullYear();

                today = `${day} of ${months[month]} ${year}`;
                return today;  
             
        case `set a timer for ${time} minutes`:   
            setTimeout(() => {
                console.log('time is up.!!')
            }, setTime); 
            return  `timer is set to ${time} minutes`;           
   }
   
        const firstNumber = Number(arrayOfStrings[2]);
        const secondNumber = Number(arrayOfStrings[4]);
        if(arrayOfStrings[3] === '+'){
            return firstNumber + secondNumber;
        } 
        else if(arrayOfStrings[3] === '-'){
            return firstNumber - secondNumber;
        } 
        else if(arrayOfStrings[3] === '*'){
            return firstNumber * secondNumber;
        } 
        else if(arrayOfStrings[3] === '/'){
            return firstNumber / secondNumber;
        } 
        else{
             return 'you can give command like /what is 3+3/';
        }

}
console.log(getReply('my name is benjamin'));
console.log(getReply('what is my name'));
console.log(getReply('add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'))
console.log(getReply('What is 3 + 3'))
console.log(getReply('set a timer for 1 minutes'));




