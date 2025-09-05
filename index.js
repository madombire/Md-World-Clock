function updateTime() {
  // Los Angeles
  let losAngelesDateElement = document.querySelector("#date");
  let losAngelesTimeElement = document.querySelector("#time");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM, Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  // Paris
  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM, Do YYYY");
  parisTimeElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

// Dropdown city selection
let citiesSelectElement = document.querySelector("#city");
let selectedCityInterval = null;

function updateSelectedCity(cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.split("/")[1].replace(/_/g, " ");
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} 
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let citiesElement = document.querySelector("#cities");

  // Clear any previous interval
  if (selectedCityInterval) {
    clearInterval(selectedCityInterval);
    selectedCityInterval = null;
  }

  if (cityTimeZone === "") {
    // Revert to default (Los Angeles + Paris)
    citiesElement.innerHTML = "";
    return;
  }

  // Update immediately
  updateSelectedCity(cityTimeZone);

  // Update every second
  selectedCityInterval = setInterval(() => {
    updateSelectedCity(cityTimeZone);
  }, 1000);
}

citiesSelectElement.addEventListener("change", updateCity);
