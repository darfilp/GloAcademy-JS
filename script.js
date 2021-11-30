const checkString = function(str) {
    if (typeof(str) !== 'string') {
        alert('Это не строка!')
    } else {
        str = str.trim();
        if (str.length > 30) {
            str = str.slice(0, 30) + '...'
            console.log(str);
        } else {
            console.log(str);
        }
    }
}

checkString(' Lesson 4fdjnfbfhfjhbjxfbhvjbhvbvhxjbhjxvhbjv');