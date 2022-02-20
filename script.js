function getTimeRemaining() {
    let date = new Date();
    let dayWeek = date.getDay();
    let data = date.getDate(); //дата
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    const minut = date.getMinutes();
    const sec = date.getSeconds();

    return {
        'data': data,
        'hour': hour,
        'minut': minut,
        'sec': sec,
        'year': year,
        'month': month,
        'dayWeek': dayWeek,
    }
}

function getZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }


function setClock(selector) {
    const weeksStr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const mounthsStr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const zadanie1 = document.querySelector(selector),
        weeks = zadanie1.querySelector('.weeks'),
        days = zadanie1.querySelectorAll('.days'),
        hours = zadanie1.querySelectorAll('.hours'),
        minutes = zadanie1.querySelectorAll('.minutes'),
        years = zadanie1.querySelectorAll('.years'),
        mounths = zadanie1.querySelectorAll('.mounths'),
        seconds = zadanie1.querySelectorAll('.seconds');
    
        setInterval(updateClock, 1000) 

        updateClock()

        function updateClock() {
            const t = getTimeRemaining();
            days.forEach((item) => {
                item.textContent = getZero(t.data);
            });
            hours.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = getZero(t.hour) + getNoun(getZero(t.hour), ' час', ' часа', ' часов');
                } else {
                    item.textContent = getZero(t.hour);
                }
            });
            minutes.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = getZero(t.minut) + getNoun(getZero(t.minut), ' минута', ' минуты', ' минут');
                } else {
                    item.textContent = getZero(t.minut);
                }
            });
            seconds.forEach((item, index) => {
                if (index === 0) {
                    item.textContent = getZero(t.sec) + getNoun(getZero(t.sec), ' секунда', ' секунды', ' секунд');
                } else {
                    item.textContent = getZero(t.sec);
                }
            });
            years.forEach((item) => {
                item.textContent = t.year;
            });

            for (let i = 0; i < mounthsStr.length; i++) {
                if (i === t.month) {
                    mounths[0].textContent = mounthsStr[i];
                    mounths[1].textContent = getZero(t.month + 1);
                }
            }

            for (let i = 0; i < weeksStr.length; i++) {
                if (i === t.dayWeek) {
                    weeks.textContent = weeksStr[i];
                }
            }
        }

}

setClock('.container');