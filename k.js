// const f = {
//     a: 'sdds',
//     s: 0,
//     sf: 5454
// };

// Object.defineProperty(f, 'full', {
//     get() {
//         return `${this.a}`
//     },
//     set(value) {
//         this.cm = value
//     }
// })

// f.a = 78

// console.log(f.full)

// 'use strict'

// const person = {
//     name: 'Daria',
//     age: 22,
//     methed: function() {
//         const arr = [1,2,3];
//         const ars = arr.reduce((acc, item) => {
//             console.log(this)
//             return acc + item
//         }, 0)
//         console.log(this)
//         console.log(ars)
//     }
// }

// person.methed()


// function name() {
//     console.log(this.name)
// }

// name.apply(person)

// const arr1 = new Array(1, 2);
// const arr2 = Array(1, 2)
// const arr3 = [1, 2]

// console.log(arr3.__proto__)
// console.log(Array.prototype)

// const human = {
//     legs: true,
//     tail: false,
//     eyes: 'green',
//     age: 22,
//     walk() {
//         console.log('Я хожу')
//     },
//     say() {
//         console.log(this.name)
//     },
// }

// const man = Object.create(human);

// const alex = Object.create(man);
// alex.name = "Alex"

// alex.say()

const Person = function(name) {
    this.names = name;
};

const Alex = new Person('Alex')

Person.prototype.say = function() {
    console.log('Привет')
}

const Daria = new Person('Daria')
Daria.say()
Alex.__proto__.say()
console.log(Alex)










