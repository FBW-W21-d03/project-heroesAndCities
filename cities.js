const cities = ["Berlin", "München", "Hamburg", "Frankfurt", "Leipzig", "Dresden", "Dortmünd", "Köln"];

function addElement (city) {
  document.write("<p class='cities'>" + city + "</p>");
}
cities.map(addElement);
