const container = document.querySelector('div');

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let data = new Date();
let nowWeek = data.getDay() - 1;

week.forEach((item) => {
    
    if ((item === 'Суббота') || (item === 'Воскресенье')) {
        container.innerHTML += `<p><em>${item}</em></p>`
    } else {
        container.innerHTML += `<p>${item}</p>`
    }

 })


const p = document.querySelectorAll('p');

p.forEach((item, index) => {
    if (index === nowWeek) {
        item.style.fontWeight = '800'
    }
})
