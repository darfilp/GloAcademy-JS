const zadanie1 = document.querySelector('.zadanie-1');

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 
let date = new Date();
let dayWeek = date.getDay() - 1;
let data = date.getDate(); //дата
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
const minutes = date.getMinutes();
const sec = date.getSeconds();
let note = `Сегодня `;

// Задание под буквой а

week.forEach((day, index) => {
    if (index === dayWeek) {
        note += `${day},`;
    }
});

note += ` ${data}`;

months.forEach((day, index) => {
    if (index === month) {
        note += ` ${day} `;
    }
})
note += `${year} года, `;

function changeHour(hour) {
    if ((+hour === 1 || +hour === 21) && (+minutes === 1 || )){
        note += `${hour} час `;
    } else if ((+hour >= 2 && +hour <= 4) || (+hour >= 22 && +hour <= 24)) {
        note += `${hour} часа `
    } else {
        note += `${hour} часов `
    }

    note += `${minutes} минут `;
}
changeHour(hour)




note += `${sec} секунд`;

// Задание под буквой б



// console.log(data);
// console.log(year);
// console.log(hour);
// console.log(minutes);
// console.log(sec);
console.log(note);