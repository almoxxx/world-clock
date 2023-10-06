function updateTime() {
  //hannover
  let hannoverelement = document.getElementById("hannover");
  let hannoverDateelement = hannoverelement.querySelector(".date");
  let hannoverTimeelement = hannoverelement.querySelector(".time");
  let hannovertime = moment().tz("Europe/Berlin");

  hannoverDateelement.innerHTML = hannovertime.format("dddd, MMMM Do YYYY");
  hannoverTimeelement.innerHTML = hannovertime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //buenosaires
  let buenosaireselement = document.getElementById("buenosaires");
  let buenosairesDateelement = buenosaireselement.querySelector(".date");
  let buenosairesTimeelement = buenosaireselement.querySelector(".time");
  let buenosairestime = moment().tz("America/Argentina/Buenos_Aires");

  buenosairesDateelement.innerHTML =
    buenosairestime.format("dddd, MMMM Do YYYY");
  buenosairesTimeelement.innerHTML = buenosairestime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //bogota
  let bogotaelement = document.getElementById("bogota");
  let bogotaDateelement = bogotaelement.querySelector(".date");
  let bogotaTimeelement = bogotaelement.querySelector(".time");
  let bogotatime = moment().tz("America/Bogota");

  bogotaDateelement.innerHTML = bogotatime.format("dddd, MMMM Do YYYY");
  bogotaTimeelement.innerHTML = bogotatime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}
//update the time every second
updateTime();
setInterval(updateTime, 1000);

//update the city
function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let selectedCityElement = document.querySelector("#selectedCity");

  function updateTimeForSelectedCity() {
    let cityTime = moment().tz(cityTimezone);

    selectedCityElement.innerHTML = `<div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM, Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "HH:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>`;
  }
  updateTimeForSelectedCity();
  setInterval(updateTimeForSelectedCity, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
