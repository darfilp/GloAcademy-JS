"use strict"

const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    rollback: 38,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: "",
    service2: "",
    //Старт
    start: function() {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = +appData.getFullPrice();
        appData.title = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
    },
    //Задаем вопросы
    asking: function() {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор");
    appData.screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
    do {
        appData.screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    //Проверяем число
    isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
    },
    //Сумма всех дополнительных услуг
    getAllServicePrices: function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let price = 0;

        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        do {
            price = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(price));
        
        sum += +price;
    }
    return sum;
    },
    //Выдачи скидки
    getRollbackMessage: function(price) {
    if (price === 30000) {
    return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
    } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена';
    } else {
    return 'Что-то пошло не так';
    }
    },
    //Сумма стоимости верстки и стоимости доп услуг
    getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
    },
    //Красивый title
    getTitle: function() {
    appData.title = appData.title.trim();
    appData.title = appData.title.charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase();
    return appData.title;
    },
    //Итоговая стоимость за вычетом процента отката
    getServicePercentPrices: function() {
    return appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    },
    logger: function() {
        for (let key in appData) {
            if (typeof(appData[key]) !== 'function') {
                console.log(`Ключ ${key} имеет значение ${appData[key]}`);
            }
        }
    }
};

appData.start();