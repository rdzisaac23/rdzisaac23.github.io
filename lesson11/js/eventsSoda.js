const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        let div = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        
        p1.textContent = towns[6].events[0];
        p2.textContent = towns[6].events[1];
        p3.textContent = towns[6].events[2];
    
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
     
        document.querySelector('section#events').appendChild(div);
      }
    }
  });
