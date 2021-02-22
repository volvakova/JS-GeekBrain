function Product(name, price){
    this.name = name;
    this.price = price;
}
let products = [new Product("Meat", 500) ,new Product("Milk", 100) ,new Product("Apple", 50), new Product("Calt", 50)];

function countBasketPrice(prod){
    let sum = 0;
        for (let i= 0; i< prod.length; i++){
        sum = sum + prod[i].price;
        }
    return sum;
}
const catalog = document.querySelector('#catalog');
const basket = document.querySelector('#basket');

function GenerationCatalog(prod){
        for (let i= 0; i< prod.length; i++){
            const product = document.createElement('div');
            product.classList.add('product');
            product.innerHTML = `<p> Наименование: ${prod[i].name} </p> <p> Цена товара: ${prod[i].price} </p>`;
            catalog.appendChild(product);
            }
    }

GenerationCatalog(products);

function GenerationBasket(prod){
    if(prod === null || prod === undefined || prod == NaN){
        const message = document.createElement('p');
        message.innerHTML = `В корзине нет товаров`;
        basket.appendChild(message);
    }
    else{
        const message = document.createElement('p');
        message.innerHTML = `В корзине ${prod.length} товаров, на сумму ${countBasketPrice(prod)} рублей`;
        basket.appendChild(message);
    }
}

GenerationBasket(products);