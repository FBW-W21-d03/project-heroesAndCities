const cities = ["New York", "San Francisco", "Los Angeles", "Chicago", 
"Las Vegas", "Miami", "Washington", "Alabama"];

function addElement (city) {
  document.write("<p class='cities'>" + city + "</p>");
}
cities.map(addElement);

let listBrand;
listBrand = cities

 function printBtn() {
  for (let i = 0; i < listBrand.length; i++) {
     let btn = document.createElement("button");
     let t = document.createTextNode(listBrand[i]);
     btn.appendChild(t);
     document.body.appendChild(btn);
      }
  }
  
  window.onload = printBtn();
