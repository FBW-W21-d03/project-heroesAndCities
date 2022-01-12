const cities = ["New York" , "San Francisco" , "Los Angeles" , "Chicago" , "Las Vegas" , "Miami" , "Washington" , "Alabama"];


function addElement (cities) {
    document.write("<button  class='cities'>" + cities + "</button>");
  }
  
  cities.map(addElement);