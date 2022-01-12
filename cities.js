const cities = ["New York",
"San Francisco",
"Los Angeles",
"Chicago",
"Las Vegas",
"Miami",
"Washington",
 "Alabama"];

 function addElementCities (cities) {
  document.write("<button onclick='citiesClick()' class='cities'>" + cities + "</button>");
}
cities.map(addElementCities);

function citiesClick () {

  document.getElementById("cities").innerHTML = "Hallo das ist: " + cities;

}

