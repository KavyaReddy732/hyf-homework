console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

let input = document.getElementById('searchproducts')
let maxPriceInput = document.querySelector('.searchprice')
input.addEventListener('keyup', (e)=>{
    let filterProduct = e.target.value.toLowerCase();
    const filteredValue = products.filter((element)=>{
        return (element.name.toLowerCase().includes(filterProduct));
  });
  productsUl.innerHTML = " ";
  renderProducts(filteredValue);
});
  

maxPriceInput.addEventListener('keyup', (e)=>{
    const maxPrice = maxPriceInput.value;
    const filterbyPrice = products.filter((element)=>{
        return (element.price <= maxPrice);
  });
  productsUl.innerHTML = " ";
  renderProducts(filterbyPrice);
});




