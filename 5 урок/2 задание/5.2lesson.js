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
            but.textContent = "Купить";
            but.classList.add('buttbuy')
            product.classList.add('product');
            product.innerHTML = `<p> Наименование: ${prod[i].name} </p> <p> Цена товара: ${prod[i].price} </p>`;
            catalog.appendChild(product);
            catalog.appendChild(but);
            }
    }

    const showbasket = document.getElementById('showBasket');

    for(let i=0; i<productsCatalog.length; i++){
        but[i].addEventListener('click',function(e){
            productsBascet.push(productsCatalog[i]);
            GenerationBasket(productsBascet);
        })}
    
        function GenerationBasket(prod){
            for (let i=0; i<prod.length; i++){
                const basketlist = document.querySelector('modalBacket');
                const html = `<div id="1" class= "titleProduct"><p> Название товара: ${prod[i].name}</p><p> Цена товара : ${prod[i].price} </p> 
                <button class = "deleteProduct">Удалить товар</button></div> 
                <div id="4"><h1>Адрес доставки</h1></div>
                <div id="3"><h1>Комментарий</h1></div> `
                basketlist.insertAdjacentElement('beforeend', html);
            }
        }
  
    showbasket.addEventListener('click', function(e) {
        GenerationBasket(productsBascet)
        console.log(productsBascet);
    })



const feldnNameProduct = document.getElementById('addProductname');
const feldPriceProduct = document.getElementById('addProductprice');
const buttAddProd = document.getElementById('butt__addprod');

function AddProductinCatalog(name, price){
    productsCatalog.push(new Product(name,price));
    GenerationCatalog(productsCatalog);
}

buttAddProd.addEventListener('click', function(){ 
    productsCatalog.push(new Product(feldnNameProduct.value, feldPriceProduct.value));
    GenerationCatalog(productsCatalog);
    productsCatalog.length = 0;
})



function a() {
    alert(this);
}
a.call(null);
