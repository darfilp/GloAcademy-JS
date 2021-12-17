const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const h2 = document.querySelectorAll('.book > h2> a');
const adv = document.querySelector('.adv');
const li = document.querySelectorAll('ul > li');

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

h2[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

li[47].after(li[55]);
li[55].after(li[49]);
li[49].after(li[50]);
li[53].after(li[51]);
li[9].after(li[2]);
li[3].after(li[6]);
li[6].after(li[8]);
li[26].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');

console.log(li);