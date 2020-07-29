//Age-ify (A future age calculator)
let yearofBirth=1994;
let yearofFuture=2027;
let age=yearofFuture-yearofBirth+7;
console.log(`you will be ${age} years old in ${yearofFuture}`);

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth=2020;
let dogYearFuture=2027;
const dogYear=dogYearFuture-dogYearOfBirth;
//console.log(dogYear);
let shouldShowResultInDogYears=true;
if(shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear*10} dog years old in ${dogYearFuture}`);
}
else{
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}

//Housey pricey (A house price estimator)
let width=[8,5];
let deep=[10,11];
let height=[10,8];
let gardenSizeInM2=[100,70];
let houseCost=[2500000 , 1000000];
let VolumeInMeters=[width[0]*deep[0]*height[0] , width[1]*deep[1]*height[1]]
let housePrice = 
[VolumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300,
     VolumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];

if(houseCost[0]<=housePrice[0]){
    console.log("expensive house");
}
else{
    console.log("can buy the house");
}
if(houseCost[1]<=housePrice[1]){
    console.log("expensive house");
}
else{
    console.log("can buy the house");
}

//Ez Namey (Startup name generator) Optional

let firstNames=["easy","ebbn","atr","iris","fry","inter","astral","halo","flynt","flow"];
let secondNames=["corporate","flow","spayce","centers","media","layer","spec","build","works","feer"];
const randomNumber = Math.floor(Math.random())
let startupName=(`${firstNames[randomNumber * firstNames.length+8]} ${secondNames[randomNumber * secondNames.length]}`);
console.log(startupName);

console.log(`the startup ${startupName} contains ${startupName.length} characters`);

