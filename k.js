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

'use strict'

const person = {
    name: 'Daria',
    age: 22,
    methed: function() {
        const arr = [1,2,3];
        const ars = arr.reduce((acc, item) => {
            console.log(this)
            return acc + item
        }, 0)
        console.log(this)
        console.log(ars)
    }
}

person.methed()


function name() {
    console.log(this.name)
}

name.apply(person)


