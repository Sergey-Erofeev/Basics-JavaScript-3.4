const money = prompt('сколько у вас с собой есть денег?');
const apples = prompt('сколько вы купили яблок?');
const bread = prompt('сколько вы купили батонов хлеба?');

const cost_apples = +prompt('сколько стоит одно яблоко?') * +apples;
const cost_bread = +prompt('сколько стоит один батон хлеба?') * +bread;
const result = +money > (cost_apples + cost_bread);

document.body.innerText = result;