let currentdate = document.lastModified;
let date = new Date();

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


let year = date.getFullYear();
document.querySelector('.date').textContent = currentdate;
document.querySelector('.year').textContent = year;
document.querySelector('.date_h').textContent = fulldateUK;

let hambutton = document.querySelector('.ham');
let mainnav = document.querySelector('nav');

hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')});