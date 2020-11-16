const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));
 

app.get('/calculator/:operator', function(req,res){
    let operator = req.params.operator;
    const array = Object.values(req.query);
    let arr = [];
    for(var i = 0; i < array.length; i++)
    {
    arr = arr.concat(array[i]);
    }
    let values = arr.map(Number);
    console.log(values)
    if(operator === "add"){
        const sum = values.reduce((a, b) => a + b);
        res.send(`the sum of the values is ${sum}`)
    }
    else if(operator === "multiplication"){
        const multiply = values.reduce((a, b) => a * b);
        res.send(`the sum of the values is ${multiply}`)
    }
    else if(operator === "division"){
        const division = values.reduce((a, b) => a / b);
        res.send(`the sum of the values is ${division}`)
    }
    else if(operator === "subtraction"){
        const sub = values.reduce((a, b) => a - b);
        res.send(`the sum of the values is ${sub}`)
    }
    else{
        res.send("enter valid operator")
    }

});

app.get('/calculator/multiply', function(req,res){
    //let operator = req.params.operator;
    const first = req.query.first;
    const array = Object.values(req.query);
    let conArray = [];
    for(var i = 0; i < array.length; i++)
    {
        conArray = conArray.concat(array[i]);
    }
    let values = conArray.map(Number);
    const result = values.reduce((a, b) => a * b);
    res.send(`the sum of the values is ${result}`);
});


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
