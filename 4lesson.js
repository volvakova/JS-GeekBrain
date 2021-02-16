//4 урок 1 задание
/*
function createObject(numb){
    let obj = {
        единицы : 0,
        десятки: 0,
        сотни: 0
    }
    obj.сотни = Math.trunc(numb / 100);
    obj.десятки = Math.trunc((numb / 10) % 10);
    obj.единицы = numb % 10;
    return console.log(obj);
}

createObject(832);
*/

//2 задание

function Product(name, price){
    this.name = name;
    this.price = price;
}
let products = [new Product("Meat", 500) ,new Product("Milk", 100) ,new Product("Apple", 50), new Product("Calt", 50)];
console.log(products);


function countBasketPrice(prod){
    let sum = 0;
        for (let i= 0; i< prod.length; i++){
        sum = sum + prod[i].price;
        }
    return console.log(sum);
}

countBasketPrice(products);