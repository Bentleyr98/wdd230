const requestURL = 'https://bentleyr98.github.io/wdd230/chamber/data.json';

but1 = document.querySelector('.but1');
but2 = document.querySelector('.but2');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];

    

    businesses.forEach(displayBusinesses);
    but1.addEventListener('click', ()=> {businesses.forEach(displayBusinesses)
      document.querySelector('div.table').style.display = 'none';
      document.querySelector('div.cards').style.display = '';});
    but2.addEventListener("click", ()=> {businesses.forEach(displayTable)
      document.querySelector('div.cards').style.display = 'none';
      document.querySelector('div.table').style.display = '';});

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