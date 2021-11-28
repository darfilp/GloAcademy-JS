const title = "My project", 
 screens = "Простые, Сложные, Интерактивные",
 screenPrice = 3019,
 rollback = 38,
 fullPrice = 150000,
 adaptive = true;

 console.log(typeof(title), typeof(fullPrice), typeof(adaptive));
 console.log(screens.length);
 console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
 console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);
 console.log(screens.toLowerCase().split(", "));
 console.log(fullPrice * (rollback/100));
