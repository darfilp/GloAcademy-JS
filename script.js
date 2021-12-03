
const playwithNumber = function(min, max) {

    const num = Math.round(Math.random() * (max - min) + min);
    console.log(num);

    function tryAgain() {
        const guessNumber = +prompt("Угадай число от 1 до 100", "1");
        console.log(guessNumber);

        if (guessNumber === 0) {
            alert("Игра окончена!");
            return tryAgain();
        }

        if (guessNumber !== num) {
            if (guessNumber < num) {
                alert("Загаданное число больше. Попробуйте снова");
                tryAgain();
            } else if (guessNumber > num){
                alert("Загаданное число меньше. Попробуйте снова");
                tryAgain();
            } else {
                alert("Введи число!");
                tryAgain();
            }
        } else if (guessNumber === num){
            alert("Вы угадали!");
        } 
    }

    tryAgain();
};

playwithNumber(1, 100);