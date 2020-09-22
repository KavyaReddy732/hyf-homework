let numbers = [1, 2, 3, 4,5,6,7];
//let newNumbers = [];

let newNumbers = numbers.filter(element => element % 2 !==0)
                        .map(item => item * 2);

console.log("The doubled numbers are", newNumbers); 