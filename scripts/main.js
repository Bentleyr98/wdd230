let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
document.querySelector('.date').textContent = currentdate;
document.querySelector('.year').textContent = year;

const lessons = ['Lesson 02','Lesson 03','Lesson 04', 'Lesson 05', 'Lesson 06', 'Lesson 07', 'Lesson 08', 'Lesson 09', 'Lesson 10','Lesson 11'];
const titles = ['Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title','Title','Title','Title'];
index=0;

while(index<lessons.length){
    document.querySelector('div').innerHTML += `<li> ${lessons[index]}: <a href="">${titles[index]}</a> </li>`;
    index++;
}