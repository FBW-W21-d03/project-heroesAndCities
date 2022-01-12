const city = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington",
  "Alabama",
];

function addElem(cities) {
  document.write("<p class='cities'>" + cities + "</p>");
}
city.map(addElem);

document.getElementsByClassName("cities")[0].style.color = "red";
document.getElementsByClassName("cities")[1].style.color = "red";
