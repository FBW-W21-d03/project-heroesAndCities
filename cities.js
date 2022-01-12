"use strict";

const cities = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington",
  "Alabama",
];

function addElement(cities) {
  document.write("<p class='heroes'>" + cities + "</p>");
}
cities.map(addElement);
