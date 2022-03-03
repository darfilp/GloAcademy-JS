'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent'); 
const otherItemsNumber = document.querySelectorAll('.other-items.number'); 

const range = document.querySelector('.rollback > div > input');
const rangeValue = document.querySelector('.rollback > div > .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];

const totalInput = document.getElementsByClassName('total-input')[0];
const totalInput2 = document.getElementsByClassName('total-input')[1];
const totalInput3 = document.getElementsByClassName('total-input')[2]; //totalcount стоиость доп услуг
const totalInput4 = document.getElementsByClassName('total-input')[3];
const totalInput5 = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    services: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    countScreen: 0,

    init: function() {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreensBlock);
        range.addEventListener('input', appData.changeInput);
    },
    start: function() {
        appData.addScreens();
        const flag = appData.check();
        if (flag === true) {
            return
        }
        appData.addServises();
        appData.addPrices();
        // appData.getServicePercentPrices(appData.fullPrice);
        // appData.logger();
        //console.log(appData);
        appData.showResult();
    },
    changeInput() {
        appData.rollback = +range.value;
        document.querySelector('.range-value').textContent = range.value + '%'
    }, 
    showResult() {
        

        total.value = appData.screenPrice;
        totalInput2.value = appData.countScreen;
        totalInput3.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalInput4.value = appData.fullPrice;
        totalInput5.value = appData.servicePercentPrice;
    }, 
    addTitle () {
        document.title = title.textContent;
    },
    addScreens() {
        let screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectedName = select.options[select.selectedIndex].textContent;

            appData.screens.push({id: index, name: selectedName, price: +input.value * +select.value, count: +input.value});

            // if (select.selectedIndex === 0 || input.value === '') {
        });
        
    },
    check() {
        let count = 0;
        const d = appData.screens.map(item => {
            if (item.price === 0) {
                count++
            }
            })
        
        if (count >= 1) {
            return true
        } else {
            return false
        }
    },
    addServises() {
        otherItemsPercent.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

        if (check.checked) {
            appData.servicesPercent[label.textContent] = +input.value;
        }
            
        })
        

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

        if (check.checked) {
            appData.servicesNumber[label.textContent] = +input.value;
        }
            
        })
    },
    addScreensBlock() {
        const cloneScreen = screens[0].cloneNode(true);
        
        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function() {

        for (const screen of appData.screens) {
            appData.countScreen += +screen.count;
        }

        for (const screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
    },
    logger: function() {
        for (let key in appData) {
            console.log(key + appData[key]);
        }
        console.log(appData.services);
    }
};

appData.init();