const names = ["John", "Bob", "Chuck", "Sam", "Pete", "Sarah", "Ana", "Henry"];

function addElement (name) {
  document.write("<button class='heroes'>" + name + "</button>");
}
names.map(addElement);
