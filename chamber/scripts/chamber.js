let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
document.querySelector('.date').textContent = currentdate;
document.querySelector('.year').textContent = year;