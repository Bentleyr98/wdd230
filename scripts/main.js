let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
document.querySelector('.date').textContent = currentdate;
document.querySelector('.year').textContent = year;

const lessons = ['Lesson 02','Lesson 03','Lesson 04', 'Lesson 05', 'Lesson 06', 'Lesson 07', 'Lesson 08', 'Lesson 09', 'Lesson 10','Lesson 11'];
const titles = ['Design Principles', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title','Title','Title','Title'];
index=0;

// while(index<lessons.length){
//     document.querySelector('div').innerHTML += `<li> ${lessons[index]}: <a href="">${titles[index]}</a> </li>`;
//     index++;
// }

document.querySelector('div').innerHTML += `<li> Lesson 02: <a href="lesson2/design-principles.html">Design Principles</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 03: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 04: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 05: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 06: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 07: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 08: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 09: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 10: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 11: <a href="">Title</a> </li>`;