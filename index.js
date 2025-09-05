function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#date");
  let losAngelesTimeElement = document.querySelector("#time");

  // Update date and time for Los Angeles
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM, Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  let parisElement = document.querySelector("#paris");
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
