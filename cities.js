const cityinAmerica =["New York", "San Francisco", "Los Angeles", "Chicago", "Las Vegas", "Miami", "Washington", "Alabama"];

cityinAmerica.sort();
function cityinHtml (city) {

    document.write(`<button onclick='cklick("${city}")' id= city> ${city} </button>`);

}
function cklick(city){
   console.log(city);
}
cityinAmerica.map(cityinHtml);


//document.write("<button onclick='cklick(" + city.toString() + ")'  class= city>" + city + "</button>");