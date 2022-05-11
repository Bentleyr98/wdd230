let button1 = document.querySelector('.btn');

function show() {
    button1.classList.add('newstyle');
}

button1.addEventListener('click', show);