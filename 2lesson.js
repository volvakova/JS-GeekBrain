//2 урок 1 задание
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2-выводится , так как в переменную с присваивается, префиксно увеличенная на 1 единицу, переменная а. а=2;
d = b++; alert(d);           // 1-выодится, так как в переменную d присваивается сначала b=1, а далее b постфиксно увеличивается на 1 единицу. b=2;
c = (2+ ++a); alert(c);      // 5-здесь снова а увеличивается сначала на 1 и становится = 3. а=3, и получается в скобках (2 + 3). 
d = (2+ b++); alert(d);      // 4-а здесь наоборот сначала складывается (2+2(значение переменной b)), а потом b  увеличивается на 1. b=3;
alert(a);                    // 3-логично, что за все процессы переменная а увеличилась до 3.
alert(b);                    // 3-аналогично)


/2 задание 

var a = 2;
var x = 1 + (a *= 2); / x=5, так как в скобках переменная а префиксно умножается на 2 и становится равной 2*2=4, и далее +1.

*/

//3 задание
/*
let a = -2;
let b = -5;

if(a>=0 && b>=0){
    console.log(a-b);
}else if(a<0 && b<0){
    console.log(a*b);
}else if((a<0 && b>=0)||(a>=0 && b<0)){
    console.log(a+b);
}
*/
//4 задание 
/*
let a = 10;

switch(a){
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15: 
        console.log(15);
        break;
}
*/

//5 задание
/*
function sum(a,b){
    return console.log(a+b);
}

function raz(a, b){
    return console.log(a-b);
}
function umn(a, b){
    return console.log(a * b);
}
function del(a,b){
    return console.log(a/b);
}
del(10,2);
sum(3,5);
umn(2,2);
raz(4,1);

*/
//6 задание
/*
function mathOperation(arg1, arg2, operation)
{
    switch(operation){
        case "Деление":
            del(arg1,arg2);
            break;
        case "Умножение":
            umn(arg1,arg2);
            break;
        case "Сложение":
            sum(arg1,arg2);
            break;
        case "Вычитание":
            raz(arg1,arg2);
            break;
    }
}
mathOperation(9,3,"Умножение");
*/
//7 задание 

//null - это пустое значение, а 0- это число.

//8 задание 

function power(val, pow){

    if(pow > 0){
        return val*(power(val, pow-1));
    }
    else return 1;
}

console.log(power(3,3));