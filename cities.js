const cities = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington ",
  "Alabama",
];

function addCities(city) {
  // Original-Aufgabe
  // document.write("<li>" + city + "</li>");

  // Bonus-Aufgabe
  document.write(`<li onclick="writeCity('${city}')">${city}</li>`);
}

document.write('<ul class="cities">');
cities.map(addCities);
document.write("</ul>");

// Bonus-Aufgabe

function writeCity(city) {
  console.log(city);
}
