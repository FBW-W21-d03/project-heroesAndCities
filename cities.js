const städten = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington",
  "Alabama",
];

function cities (städte) {
  document.write(`<button onclick='click("${städte}")' class='cities'>  ${städte} </button>`);
}
function click(städte) {
    console.log(städte);
}
städten.map(cities);
