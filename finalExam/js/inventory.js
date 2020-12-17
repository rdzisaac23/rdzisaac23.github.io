//ADD the key and change units to imperial
const apiURL = "data/inventory.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((vehicles) => {
      //Once it comes back, display it to the console.
      console.log(vehicles);
      for (let i = 0; i < vehicles.length; i++) {

        var table = document.getElementById("table-prices");
        let th = table.createTHead();
        let tr = th.insertRow(4+i);
        let tdm = tr.insertCell(0);
        let tdp = tr.insertCell(1);
        let tdrh = tr.insertCell(2);
        let tdrf = tr.insertCell(3);
        let tdwh = tr.insertCell(4);
        let tdwf = tr.insertCell(5);

        tdm.textContent = vehicles[i].model;
        tdp.textContent = vehicles[i].passengers;
        tdrh.textContent = vehicles[i].rental.reservation.HalfDay;
        tdrf.textContent = vehicles[i].rental.reservation.Full;
        tdwh.textContent = vehicles[i].rental.walkIn.HalfDay;
        tdwf.textContent = vehicles[i].rental.walkIn.Full;
        console.log(tdm);

      };
    });