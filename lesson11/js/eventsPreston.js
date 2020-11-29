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
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        p2.textContent = towns[5].events[0];
        p3.textContent = towns[5].events[1];
        p4.textContent = towns[5].events[2];
      
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)

        document.querySelector('section#events').appendChild(div);
      }
    }
  });
