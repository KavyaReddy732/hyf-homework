const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get('/add', function(request,response){
	
	const num1 = parseInt(request.query.num1);
    const num2 = parseInt(request.query.num1);

    if (isNaN(num1) && isNaN(num2)){
        response.send("please enter numbers");
    }
    else{ 
        const addition = num1 + num2;
        response.send(`the sum of numbers is ${addition}`);
    }
})

app.get('/multiply/:num1/:num2', function(req,res){
	
	const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    if (isNaN(num1) && isNaN(num2)){
        res.send("please enter numbers");
    }
    else{
        const multiply = num1 * num2;
        res.send(`the multiplication of numbers is ${multiply}`);
    }
    
})
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
