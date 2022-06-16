let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
document.querySelector('.date').textContent = currentdate;
document.querySelector('.year').textContent = year;

document.querySelector('div').innerHTML += `<li> Lesson 02: <a href="lesson2/design-principles.html">Design Principles</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 03: <a href="lesson3">Site Plan</a></li>`;
document.querySelector('div').innerHTML += `<li> Lesson 04: <a href="chamber">Chamber Home Page</a></li>`;
document.querySelector('div').innerHTML += `<li> Lesson 05: <a href="lesson4/bom.html">BOM</a></li>`;
document.querySelector('div').innerHTML += `<li> Lesson 06: <a href="chamber">Chamber of Commerce</a></li>`;
document.querySelector('div').innerHTML += `<li> Lesson 07: <a href="lesson7/lazyload.html">Lazy Load Images</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 08: <a href="lesson8/tablebuild.html">Tables</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 09: <a href="lesson9/prophets.html">Prophets</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 10: <a href="">Title</a> </li>`;
document.querySelector('div').innerHTML += `<li> Lesson 11: <a href="">Title</a> </li>`;