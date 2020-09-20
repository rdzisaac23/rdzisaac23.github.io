const mydate = new Date();
console.log(mydate);

const today = mydate.getDay();
console.log(today);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

console.log(myweekday[today]);

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e193587ff0f2ebc68b827b7bbec44563&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
    .then((response) => response.json())
    .then((weatherForecast) => {
        //Once it comes back, display it to the console.
        console.log(weatherForecast);

        document.getElementById('townName').innerHTML = weatherForecast.city.name;

        let mylist = weatherForecast.list;

        let forecastDayNumber = today;
        console.log(forecastDayNumber);

        for (let i = 0; i < mylist.length; i++) {

            let time = mylist[i].dt_txt;
            if (time.includes('21:00:00')) {
                console.log("Found an entry with 21:00:00 in the time. It was report:" + i + " from the mylist of 40");

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {
                    forecastDayNumber = 0;
                }

                let theDayName = document.createElement("span");
                theDayName.textContent = myweekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = weatherForecast.list[i].main.temp + "\xB0";

                let iconcode = weatherForecast.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('weatherforecast').appendChild(theDay);

            } // end if
        } // end for
    }); //end of "then" fat arrow function