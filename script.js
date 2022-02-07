function play (min, max) {
    let attempt = 10;
    const num = Math.round(Math.random() * (max - min) + min);

    function game() {
        const user = +prompt('Введите число от 1 до 100', '')

        if (attempt === 1) {
            alert('Попытки закончились, хотите сыграть еще?');
            play();
        }

        if (user === 0) {
            alert('Игра окончена');
            return play();
        }

        if (num !== user) {
            if (num > user) {
                attempt--;
                alert(`Загаданное число больше, осталось попыток ${attempt}`);
                console.log(attempt)
                game();
            } else if (num < user) {
                attempt--;
                alert(`Загаданное число меньше, осталось попыток ${attempt}`);
                console.log(attempt)
                game();
            } else {
                alert(`Хочешь меня обмануть? Введи число!`);
                game();
            }
            
        }

        if (num === user) {
            alert('Прямо в цель');
        }

        
    };
    game();
};


play(1, 100);
