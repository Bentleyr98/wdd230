const requestURL = 'https://bentleyr98.github.io/wdd230/chamber/data.json';

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    
    var table = document.querySelector('.table');
    var cards = document.querySelector('.cards');

    businesses.forEach(displayBusinesses);
    businesses.forEach(displayTable);

    btn1.onclick = function() {
      cards.style.display = "flex";
      table.style.display = "none";
    }

    btn2.onclick = function() {
      cards.style.display = "none";
      table.style.display = "table";
    }




// const mediaQuery = window.matchMedia('(max-width: 900px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   cards.style.display = 'none';
//   table.style.display = 'table';
// }

// const mediaQuery3 = window.matchMedia('(max-width: 690px)')
// // Check if the media query is true
// if (mediaQuery3.matches) {
//   cards.style.display = 'flex';
//   table.style.display = 'none';

// }

// const mediaQuery2 = window.matchMedia('(max-width: 690px)')
// // Check if the media query is true
// if (mediaQuery2.matches) {
//   let addrList = document.querySelectorAll('.add');
//   for (let i = 0; i < addrList.length; i++) {
//     addrList[i].style.display = 'none';
//   }

// }

window.addEventListener('resize', function(event){
  if (window.innerWidth >= 900){
      console.log(900);
      let addrList = document.querySelectorAll('.add');
      for (let i = 0; i < addrList.length; i++) {
      addrList[i].style.display = '';

  }

    cards.style.display = 'flex';
    table.style.display = 'none';
  } else if (window.innerWidth >= 690 & window.innerWidth < 900)
  {
    console.log(690);
    let addrList = document.querySelectorAll('.add');
    for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = '';
 
  }

    cards.style.display = 'none';
    table.style.display = 'table';
  } else if (window.innerWidth < 690)
  {
    console.log('small');
    let addrList = document.querySelectorAll('.add');
    for (let i = 0; i < addrList.length; i++) {
    addrList[i].style.display = 'none';
  }
    cards.style.display = 'flex';
    table.style.display = 'none';
  // } else if (window.innerWidth < 690)
  // {
  //   console.log('small');
  //   let addrList = document.querySelectorAll('.add');
  //   for (let i = 0; i < addrList.length; i++) {
  //   addrList[i].style.display = 'none';
  // }
  } 
}); 

// const mediaQuery4 = window.matchMedia('(min-width: 700px)')
// // Check if the media query is true
// if (mediaQuery4.matches) {
//   let addrList = document.querySelectorAll('.add');
//   for (let i = 0; i < addrList.length; i++) {
//     addrList[i].style.display = '';
//   }
// }


  });







  function displayBusinesses(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', business.logo);
    img.setAttribute('alt', `${business.name}'s logo`);
    div.appendChild(img);
    card.appendChild(div);

    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = business.name;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);

    let address = document.createElement('p');
    address.textContent = business.address;
    card.appendChild(address);


    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    let website = document.createElement('p');
    website.textContent = business.website;
    website.setAttribute('class', 'web');
    card.appendChild(website);


    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  function displayTable(business){
    let list_row = document.createElement('tr');
    let list_td = document.createElement('td');
    list_td.textContent = business.name;

    let td_add = document.createElement('td');
    td_add.textContent = business.address;
    td_add.setAttribute('class', 'add');

    let td_cell = document.createElement('td');
    td_cell.textContent = business.phone;

    let td_web = document.createElement('td');
    td_web.textContent = business.website;

    list_row.appendChild(list_td);
    list_row.appendChild(td_web);
    list_row.appendChild(td_add);
    list_row.appendChild(td_cell);

    document.querySelector('.table').appendChild(list_row);

  }