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

updateTime();
setInterval(updateTime, 1000);
