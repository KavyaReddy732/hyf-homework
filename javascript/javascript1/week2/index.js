function getFullName(firstName, surName, userFormlName) {
    const fullName = `${firstName} ${surName}`
    return userFormlName ? `Lord ${fullName}`: fullName;
}

const fullName1 = getFullName('k' , 'k', true);
const fullName2 = getFullName( 'i' ,'j', false);
//getFullName();
console.log(fullName1);
console.log(fullName2);

//Event application

const todayDate = new Date();
const day = todayDate.getDay();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventWeekday(daystoEvent) {
    const eventDay = (daystoEvent + day)%7;
    return eventDay;
}
const dayOfEvent = getEventWeekday(9);
console.log(weekday[dayOfEvent]);


//Weather wear

function weather(temperature){
    let clothsToWear;
    if (temperature < 15) {
        clothsToWear = "winter jacket with boots";
        return clothsToWear;
    } 
    else if (temperature < 23) {
        clothsToWear = "sweater with shoes";
        return clothsToWear;
    } 
    else if (temperature < 30) {
        clothsToWear = "t-shirt and shorts";
        return clothsToWear;
     }
    else{
        return "cloths that suits you..!!"; 
    }

}
const weatherReport = weather(20);
console.log(weatherReport);


//Student manager


let class07Students = [];
function addStudentToClass(studentName){
        if(class07Students.length < 6){
         
         if(class07Students.length >=6 && studentName.toLowerCase == "queen"){
            class07Students.push(studentName);
        }
        else if(studentName == ""){
            return  `You cannot add an empty string to a class`;

        }
        else if(class07Students.includes(studentName)){
            return `${studentName} already exists`;

        }
        else{
            class07Students.push(studentName);
        }
    }
        else{
            return  `Cannot add more students to class 07".`;
        }
        
    }
    addStudentToClass(" a ");
    addStudentToClass(" b ");
    addStudentToClass("  ");
    addStudentToClass(" c ");
    addStudentToClass(" c ");
    addStudentToClass(" d ");
    addStudentToClass(" e ");
    addStudentToClass(" f ");
    addStudentToClass(" g ");
    console.log(class07Students);

    function getNumberOfStudents() {
       let numberOfStudents = class07Students.length;
       return numberOfStudents;
    }
    console.log(getNumberOfStudents());
    













