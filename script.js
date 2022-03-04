'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent'); 
const otherItemsNumber = document.querySelectorAll('.other-items.number'); 

const range = document.querySelector('.rollback > div > input');
const rangeValue = document.querySelector('.rollback > div > .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const totalInput = document.getElementsByClassName('total-input')[0];
const totalInput2 = document.getElementsByClassName('total-input')[1];
const totalInput3 = document.getElementsByClassName('total-input')[2]; //totalcount стоиость доп услуг
const totalInput4 = document.getElementsByClassName('total-input')[3];
const totalInput5 = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen')
const checkbox = document.querySelectorAll('.custom-checkbox');
//console.log(resetBtn)

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
        this.addTitle();
        startBtn.addEventListener('click', this.start);
        buttonPlus.addEventListener('click', this.addScreensBlock);
        range.addEventListener('input', this.changeInput);
        resetBtn.addEventListener('click', this.reset)
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
        appData.showResult();
        appData.blockScreen(true);
        startBtn.style.display = 'none';
        resetBtn.style.display = 'flex';
    },

    reset() {
        appData.changeBtn();
        appData.resetValue();
        appData.blockScreen(false);
    },

    resetValue() {
        checkbox.forEach(item => {
            item.checked = false
        });

        let screens = document.querySelectorAll('.screen')

        screens.forEach((screen) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            select.selectedIndex = 0;
            input.value = '';
        });

        document.querySelector('.range-value').textContent = '0%';
        range.value = 0;

        screens.forEach((item, index) => {
            if (index != 0) item.remove();
        });

        total.value = 0;
        totalInput2.value = 0;
        totalInput3.value = 0;
        totalInput4.value = 0;
        totalInput5.value = 0;
    },

    changeBtn() {
        resetBtn.style.display = 'none';
        startBtn.style.display = 'flex';
    },

    blockScreen(flag) {
        let screens = document.querySelectorAll('.screen')

        screens.forEach(item => {
            item.querySelector('select').disabled = flag;
            item.querySelector('input').disabled = flag;
        })
        checkbox.forEach(item => {
            item.disabled = flag;
        })
    },

    changeInput() {
        this.rollback = +range.value;
        document.querySelector('.range-value').textContent = range.value + '%'
    }, 

    showResult() {
        total.value = this.screenPrice;
        totalInput2.value = this.countScreen;
        totalInput3.value = this.servicePricesPercent + this.servicePricesNumber;
        totalInput4.value = this.fullPrice;
        totalInput5.value = this.servicePercentPrice;
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

            this.screens.push({id: index, name: selectedName, price: +input.value * +select.value, count: +input.value});
        });
        
    },

    check() {
        let count = 0;
        const d = this.screens.map(item => {
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
            this.servicesPercent[label.textContent] = +input.value;
        }
            
        })
        

        otherItemsNumber.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

        if (check.checked) {
            this.servicesNumber[label.textContent] = +input.value;
        } 
        })
    },

    addScreensBlock() {
        const cloneScreen = screens[0].cloneNode(true);
        
        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function() {

        for (const screen of this.screens) {
            this.countScreen += +screen.count;
        }

        for (const screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for(let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback/100)));
    },

    logger: function() {
        for (let key in this) {
            console.log(key + this[key]);
        }
        console.log(this.services);
    }
};

appData.init();