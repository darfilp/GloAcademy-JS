'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    asking: function() {
        do {
            appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title) || appData.title === null || appData.title === "");

        for (let i = 0; i < 1; i++) {
            let name;

            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name) || name === null || name === "");

            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));
            
            appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name) || name === null || name === "");

           if(name in appData.services) {
            name = name + `${i}`;

           }

            let price = 0;
    
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));
            
            appData.services[name] = +price;
        }
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function() {

        appData.screenPrice = appData.screens.reduce(function(sum, current) {
            return +sum.price + (+current.price);
        });

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getTitle: function() { 
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price < 15000 && price >= 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что-то пошло не так";
        }
    },
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function(fullPrice) {
        appData.servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (appData.rollback/100)));
    },
    start: function() {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getTitle();
        appData.getServicePercentPrices(appData.fullPrice);
        appData.getRollbackMessage(appData.fullPrice);
        appData.logger();
    },
    logger: function() {
        for (let key in appData) {
            console.log(key + appData[key]);
        }
        console.log(appData.services);
    }
};

appData.start();