const cities = ["New York" , "San Francisco" , "Los Angeles" , "Chicago" , "Las Vegas" , "Miami" , "Washington" , "Alabama"];


function addElement (cities) {
    document.write("<p class='cities'>" + cities + "</p>");
  }
  
  cities.map(addElement);