//3 урок 1 задание

primeNumber:
for (let i = 2; i <= 100; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue primeNumber; 
  }
  console.log(i);
}


//2 и 3 задание
/*
let x = [25, 54, 38, 29, 10];

function countBasketPrice(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return console.log(sum);
}

countBasketPrice(x);
*/

//4 задание

//for(let i=0; i<10; console.log(i++)){}

//5 задание 
/*
var str = "x"
console.log(str);
for(let i = 0; i < 19; i++){
    console.log(str += "x")
}
*/