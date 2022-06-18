const requestURL = 'https://bentleyr98.github.io/wdd230/chamber/data.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  });



  function displayBusinesses(business) {  // Create elements to add to the document
    let card = document.createElement('section');
    let img = document.createElement('img');
    img.setAttribute('src', business.logo);
    img.setAttribute('alt', `${business.name}'s logo`);
    card.appendChild(img);

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
    card.appendChild(website);


    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  function displayTable(prophet){
    let list_row = document.createElement('tr');
    let list_td = document.createElement('td');
    list_td.textContent = `${prophet.name}  ${prophet.lastname}`;

    let td_dob = document.createElement('td');
    td_dob.textContent = `Date of Birth:  ${prophet.birthdate}`;

    list_row.appendChild(list_td);
    list_row.appendChild(td_dob);

    document.querySelector('table').appendChild(list_row);

  }