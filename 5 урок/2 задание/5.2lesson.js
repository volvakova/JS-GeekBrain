function Product(name, price){
    this.name = name;
    this.price = price;
}
let productsCatalog = [];
let productsBascet = [];

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
            const but = document.createElement('button');
            but.classList.add('buttbuy')
            product.classList.add('product');
            product.innerHTML = `<p> Наименование: ${prod[i].name} </p> <p> Цена товара: ${prod[i].price} </p>`;
            catalog.appendChild(product);
            catalog.appendChild(but);
            }
    }



function GenerationBasket(prod){
    if(prod.length == 0){
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
productsCatalog.push(new Product('молоко', 50));
productsCatalog.push(new Product('сыр', 200));
productsCatalog.push(new Product('колбаса', 350));
productsCatalog.push(new Product('хлеб', 10));

GenerationCatalog(productsCatalog);

const bye = document.getElementsByClassName('buttbuy');

for(let i=0; i<bye.length; i++){
bye[i].addEventListener('click',function(e){
    productsBascet.push(productsCatalog[i]);
    GenerationBasket(productsBascet);
})}