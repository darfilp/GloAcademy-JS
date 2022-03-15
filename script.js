// class Worker {
//     constructor(organization, salary, gender, chart) {
//         this.organization = organization;
//         this.chart = chart;
//         this.salary = salary;
//         this.gender = gender;
//     }
//     show() {
//         console.log(this.organization, this.salary, this.children, this.gender)
//     }
//     render() {}
// }

// class Plumber extends Worker {
//     constructor(organization, salary, gender, chart, name, surname, age, children) {
//         super(organization, salary, gender, chart);
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.children = children;
//     }
//     show() {
//         console.log(this.name)
//     }
// }

// class Driver extends Worker {
//     constructor(organization, salary, gender, chart, name, surname, age, children) {
//         super(organization, salary, gender, chart);
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.children = children;
//     }
// }

// const plumber1 = new Plumber('ПАО Организация', 15000, 'мужчина', '2/3', 'Юрьев', 'Михаил', 32, true);
// // const plumber2 = new Plumber('Смирнов', 'Алексей', 55);
// // const plumber3 = new Plumber('Уткин', 'Дмитрий', 21);
// const driver1 = new Driver('ПАО Организация', 125000, 'мужчина', '5/2', 'Калязин', 'Олег', 43, false);
// // const driver2 = new Driver('Суслов', 'Степан', 19);
// // const driver3 = new Driver('Жик', 'Дмитрий', 44);

// console.log(plumber1)
// console.log(driver1)

// //workers.show();
// //console.log(workers.salary);

// //console.log(plumber1.salary);
// //console.log(plumber2.salary);
// //driver1.show();
// //plumber1.show();


// // n! = n * (n - 1);

// function fact(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         return n * fact(n - 1); //3*1
//     }
// } 

// console.log(fact(3))


// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company)); // 6700

// function alse() {
//     (function a() {
//         console.log(this)
//     })()
// }

// const a = {
//     d: '21',
//     b: alse
// }

// a.b()

function isIsogram(str){
  const arr = []
  if (str.length === 0) {
    return true
  } 
  str = str.toLowerCase().split('');
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length + 1; j++) {
        if (str[i] === arr[j]) {
            console.log('Попалась')
        } else {
            console.log('Попалась2')
            arr.push(str[j])
        }
    }
  }
  console.log(arr)
}

isIsogram("isIsogram")