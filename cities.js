const cities= [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington",
  "Alabama",
];

function addElement(city) {
  document.write("<p class='city'>" + city + "</p>");
}
names.map(addElement);
