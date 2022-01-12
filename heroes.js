const names = ["John", "Mary", "Helena", "Sam", "Petra", "Sarah", "Ana", "Henry"];

function addElement (name) {
  document.write("<p class='heroes'>" + name + "</p>");
}
names.map(addElement);
