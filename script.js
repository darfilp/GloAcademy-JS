let num = 266219;
let count = 1;

let array = num.toString().split("");

for (let i = 0; i < array.length; i++) {
    count = count * array[i];
}
count = count**3;
count = count.toString().substr(0,2)
console.log(+count)
