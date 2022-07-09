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


if (date.getDay() == 1 || date.getDay() == 2){
	const banner = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
	document.querySelector('.banner').textContent = banner;
	document.querySelector('.banner').style.cssText = "border: 3px solid goldenrod; padding: 5px;";
}

let hambutton = document.querySelector('.ham');
let mainnav = document.querySelector('nav');

hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')});


const images = document.querySelectorAll('.norm');
const options = {threshold: .5, rootMargin: "0px 0px 20px 0px"};

function preloadImage(img){
    const src = img.getAttribute('data-src');
    if(!src){
        return;
    } else{
        img.src = src;
    }
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            console.log(entry);
            if(!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            })
    }, 
    options
);

images.forEach(img => {
    io.observe(img);
})

// local storage
// localStorage.setItem('msgl', 'Hello Perm');
// sessionStorage.setItem('msg2', 'temporary');

// console.log(localStorage.getItem('msgl'));

let visit_heading = document.querySelector('.visited');

let now_date = new Date();


let stored_date = localStorage.getItem('last_visited');

let last_date = new Date(stored_date);

if (!stored_date){
    visit_heading.textContent = 'Welcome to our page!';
} else {
    let diff_time = now_date.getTime() - last_date.getTime();

    //calculate the number of days between the two dates
    let diff_day = Math.round(diff_time/(1000*60*60*24));

    if (diff_day == 1){
        let day = 'day';
        visit_heading.textContent = diff_day + ' ' + day + ' since your last visit';
    } else{
        let day = 'days';
        visit_heading.textContent = diff_day + ' ' + day + ' since your last visit';
    }
    
}

localStorage.setItem('last_visited', now_date);

