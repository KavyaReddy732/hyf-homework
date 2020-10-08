class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency){
        fetch(`https://api.exchangerate-api.com/v4/latest/dkk`)
            .then(res => res.json())
            .then(data => {
                console.log(`${this.price*data.rates[currency]} ${currency}`)
            })
    }     
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        // Implement functionality here
        return this.products.push(product)
    }

    removeProduct(product) {
        // Implement functionality here
        return this.products = this.products.filter((name)=> name != product)
    }

    searchProduct(productName) {
        // Implement functionality here
        return this.products.filter(product => 
            product.name === (productName.name)
        );
    }

    getTotal() {
        // Implement functionality here
        return this.products.forEach((product) => {
            let totalPrice = 0;
            totalPrice += product.price;
          });

    }

    renderProducts() {
        // Implement functionality here
        const cart = document.getElementById('cart')
        this.products.forEach((item) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <div>Product Name: ${item.name}</div>
            <div>Price: ${item.price}</div>`
            cart.append(li)
        })

    }

    getUser() {
        // Implement functionality here
        const getUser = new Promise((reslove)=>
        reslove (fetch("https://jsonplaceholder.typicode.com/users/1"))
        )
        .then(response => response.json()) 
        .then(data => {
            console.log(data)
            const user = document.getElementById("user")
            const h3 = document.createElement("h3")
            h3.innerHTML = `User : ${data.name}`
            user.appendChild(h3)
        })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
const curvedscreen = new Product('curved-screen', 4000);
const ledTV = new Product('LED-Tv', 7000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(curvedscreen);
shoppingCart.addProduct(ledTV);
shoppingCart.getUser()
shoppingCart.removeProduct(flatscreen)
shoppingCart.renderProducts()

const plant = new Product('plant', 50);
plant.convertToCurrency('EUR')
plant.convertToCurrency('USD')
