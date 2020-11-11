const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const prophets = jsonObject['prophets'];
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      for (let i = 0; i < prophets.length; i++ ) {
          let card = document.createElement('section');
          let h2 = document.createElement('h2');
          let p = document.createElement('p');
          let p1 = document.createElement('p');
          let img = document.createElement('img')
          
          h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
          p.textContent = 'Date of Birth: ' + prophets[i].birthdate;
          p1.textContent = 'Place of Birth ' + prophets[i].birthplace;
          img.setAttribute('src', prophets[i].imageurl);

          card.appendChild(h2);
          card.appendChild(p);
          card.appendChild(p1);
          card.appendChild(img);


          document.querySelector('div.cards').appendChild(card);
            }
        });