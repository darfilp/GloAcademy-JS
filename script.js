function play (min, max) {

    const num = Math.round(Math.random() * (max - min) + min);

    function game() {
        const user = +prompt('Введите число от 1 до 100', '')
        console.log(num)


        if (user === 0) {
            alert('Игра окончена');
            return play();
        }

        if (num !== user) {
            if (num > user) {
                alert('Загаданное число больше. Попробуй еще раз');
                game();
            } else if (num < user) {
                alert('Загаданное число меньше. Попробуй еще раз');
                game();
            } else {
                alert('Хочешь меня обмануть? Введи число!');
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
