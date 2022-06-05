const images = document.querySelectorAll('img');
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
localStorage.setItem('msgl', 'Hello Perm');
sessionStorage.setItem('msg2', 'temporary');

console.log(localStorage.getItem('msgl'));

let visit_heading = document.querySelector('.visited');

let now_date = new Date();

let stored_date = localStorage.getItem('last_visited');

let last_date = new Date(stored_date);

if (!stored_date){
    visit_heading.textContent = 'welcome';
} else {
    let diff_time = now_date.getTime() - last_date.getTime();

    //calculate the number of days between the two dates
    let diff_day = Math.round(diff_time/(1000*60*60*24));
console.log(diff_day);

visit_heading.textContent = diff_day + ' days since your last visit';
}

//local storage stores things as strings. When pulling items
// out, first convert to desired data type before using
// let o_date = new Date(stored_date);
// console.log(o_date);


// console.log(diff_time);

// let diff_sec = diff_time/1000;
// console.log(diff_sec);

// let diff_min = diff_time/(1000 * 60);
// console.log(diff_min);


// let diff_hour = diff_time/(1000*60*60);
// console.log(diff_hour);






// if statement to check if this is the user's first time to their page
// otherwise it'll mess up the code
// let stored_date = localStorage.getItem('date');
// if (!stored_date){
//    visit_heading.textContent = "Welcome";
//} else {
// calculate local storage and return days   
//}

localStorage.setItem('last_visited', now_date);