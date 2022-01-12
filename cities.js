const cities = ["New York", "San Francisco", "Los Angeles", "Chicago", "Las Vegas", "Miami", "Washington", "Alabama"];

function addElement (stadt) {
  document.write("<p class='cities'>" + stadt + "</p>");
}
cities.map(addElement);
