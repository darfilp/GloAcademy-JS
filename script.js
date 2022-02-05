//Часть 1

let arr = ['32', '223', '145', '3897', '4582', '7627', '4274'];

arr = arr.filter(item => {
    if (item.startsWith('2') || item.startsWith('4')) {
        return item;
    }
})

console.log(arr)

// Часть 2

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num
}
const prime = [];

for (let i = 2; i < 101; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
}