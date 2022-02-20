// let g = true; 

// let k = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             message: "I Love you",
//             time: 3000,
//         });
//     }, 5000);
// }
// )

// console.log(k)

// setTimeout(() => {
//     console.log(k)
// }, 6000);


// var momsPromise = new Promise(function(resolve, reject) {
//   momsSavings = 90000;
//   priceOfPhone = 30000;
//   if (momsSavings > priceOfPhone) {
//     resolve({
//       brand: "iphone",
//       model: "6s"
//     });
//   } else {
//     reject("We donot have enough savings. Let us save some more money.");
//   }
// });

// momsPromise.then(function(value) {
//   console.log("Hurray I got this phone as a gift ", JSON.stringify(value)); //получилось
// });

// momsPromise.catch(function(reason) {
//   console.log("Mom coudn't buy me the phone because ", reason); //не получилось
// });

// momsPromise.finally(function() {
//   console.log(
//     "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
//   );
// });

const button = document.querySelector('button');


button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        response.json().then((result) => {
        console.log(result)
    })
    })
    
    // const result = fetch('https://jsonplaceholder.typicode.com/todos/1');

    // console.log(result)

    // setTimeout(() => {
    //     console.log(result)
    // }, 5000)
})
