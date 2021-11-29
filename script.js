const title = prompt("Как называется ваш проект?", ""), 
 screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные"),
 screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
 rollback = 38,
 adaptive = confirm("Нужен ли адаптив на сайте?"),
 service1 = prompt("Какой дополнительный тип услуги нужен?"),
 servicePrice1 = +prompt("Сколько это будет стоить?"),
 service2 = prompt("Какой дополнительный тип услуги нужен?"),
 servicePrice2 = +prompt("Сколько это будет стоить?"),
 fullPrice = screenPrice + servicePrice1 + servicePrice2,
 servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

 if (fullPrice === 30000) {
     console.log('Даем скидку в 10%');
 } else if (fullPrice >= 15000 && fullPrice < 30000) {
     console.log('Даем скидку в 5%');
 } else if (fullPrice >= 0 && fullPrice < 15000) {
     console.log('Скидка не предусмотрена');
 } else {
     console.log('Что-то пошло не так');
 }

 console.log(servicePercentPrice);
 console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
 console.log(screens.length);
 console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
 console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
 console.log(screens.toLowerCase().split(", "));
 console.log(fullPrice * (rollback/100));