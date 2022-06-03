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

