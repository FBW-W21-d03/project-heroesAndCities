"use strict";

const names = ["John", "Bob", "Chuck", "Sam", "Pete", "Sarah", "Ana", "Henry"];

function addElement(name) {
  document.write("<p class='heroes'>" + name + "</p>");
}
names.map(addElement);
