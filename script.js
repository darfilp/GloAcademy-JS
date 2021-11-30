"use strict"

let title = prompt("Как называется ваш проект?", "");
const screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные"),
screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
rollback = 38,
adaptive = confirm("Нужен ли адаптив на сайте?"),
service1 = prompt("Какой дополнительный тип услуги нужен?"),
servicePrice1 = +prompt("Сколько это будет стоить?"),
service2 = prompt("Какой дополнительный тип услуги нужен?"),
servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));


const getRollbackMessage = function(price) {
    if (price === 30000) {
    return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
    } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена';
    } else {
    return 'Что-то пошло не так';
    }
};

const getAllServicePrices = function(addprice1, addprice2) {
    const allServicePrices = addprice1 + addprice2;
    return allServicePrices;
}

function getFullPrice(price, callback) {
    return fullPrice = price + callback(servicePrice1, servicePrice2);
}

const getTitle = function(name) {
    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return name;
};

const getServicePercentPrices = function(price, roll) {
    return price - (price * (roll/100));
}

const showTypeOf = function(variable) {
    console.log('variable', typeof(variable));
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

/*console.log(`Сумму стоимости верстки и стоимости доп услуг ${getFullPrice(screenPrice, getAllServicePrices)}`); //2
console.log(`Сумма всех дополнительных услуг ${getAllServicePrices(servicePrice1, servicePrice2)}`) //1
console.log(`Красивый title ${getTitle(title)}`); //3 */
console.log(`Итоговую стоимость за вычетом процента отката ${getServicePercentPrices(fullPrice, rollback)}`); 
//4
console.log(screens.split(", ")) //5

console.log(getRollbackMessage(fullPrice));
