const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayTable);
    console.table(jsonObject);  // temporary checking for valid response and data parsing

  });



  function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name}  ${prophet.lastname}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);

    let birthdate = document.createElement('p');
    birthdate.textContent = `Date of Birth:  ${prophet.birthdate}`;
    card.appendChild(birthdate);


    let birthplace = document.createElement('p');
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    let img = document.createElement('img');
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
    card.appendChild(img);
    
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