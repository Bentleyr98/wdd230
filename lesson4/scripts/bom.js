const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {

    if (input.value.length != 0){
    const myChapter = input.value;
    input.value = '';

    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = myChapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listChapter);
    input.focus();

    listBtn.addEventListener('click', () => {
        list.removeChild(listChapter);
      });
      input.value = '';
}


      });
