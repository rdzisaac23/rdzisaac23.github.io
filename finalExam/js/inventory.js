//ADD the key and change units to imperial
const apiURL = "data/inventory.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((vehicles) => {
      //Once it comes back, display it to the console.
      console.log(vehicles);
      console.log(vehicles.vehicles.length)

      for (let i = 0; i < vehicles.vehicles.length; i++) {

        // var table = document.getElementById("prices-table");
        // let tr = table.insertRow(i);
        // let tdm = tr.insertCell(0);
        // let tdp = tr.insertCell(1);
        // let tdrh = tr.insertCell(2);
        // let tdrf = tr.insertCell(3);
        // let tdwh = tr.insertCell(4);
        // let tdwf = tr.insertCell(5);

        // tdm.textContent = vehicles.vehicles[i].model;
        // tdp.textContent = vehicles.vehicles[i].passengers;
        // tdrh.textContent = vehicles.vehicles[i].rental.reservation.HalfDay;
        // tdrf.textContent = vehicles.vehicles[i].rental.reservation.Full;
        // tdwh.textContent = vehicles.vehicles[i].rental.walkIn.HalfDay;
        // tdwf.textContent = vehicles.vehicles[i].rental.walkIn.Full;

        let tr1 = document.createElement('tr');
        let tdm1 = document.createElement('td');
        let tdp1 = document.createElement('td');
        let tdrh1 = document.createElement('td');
        let tdrf1 = document.createElement('td');
        let tdwh1 = document.createElement('td');
        let tdwf1 = document.createElement('td');

        tdm1.textContent = vehicles.vehicles[i].model;
        tdp1.textContent = vehicles.vehicles[i].passengers;
        tdrh1.textContent = vehicles.vehicles[i].rental.reservation.HalfDay;
        tdrf1.textContent = vehicles.vehicles[i].rental.reservation.Full;
        tdwh1.textContent = vehicles.vehicles[i].rental.walkIn.HalfDay;
        tdwf1.textContent = vehicles.vehicles[i].rental.walkIn.Full;

        tr1.appendChild(tdm1);
        tr1.appendChild(tdp1);
        tr1.appendChild(tdrh1);
        tr1.appendChild(tdrf1);
        tr1.appendChild(tdwh1);
        tr1.appendChild(tdwf1);

        document.querySelector('table#prices-table').appendChild(tr1)
        // document.querySelector('div.cards').appendChild(card);




      };
    });