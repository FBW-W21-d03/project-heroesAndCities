const cityinAmerica =["New York", "San Francisco", "Los Angeles", "Chicago", "Las Vegas", "Miami", "Washington", "Alabama"];

cityinAmerica.sort();
function cityinHtml (city) {

    document.write(`<button onclick='cklick("${city}")' id= city> ${city} </button>`);

}
function cklick(city){
 if(city.length > 0)
{
    document.write(`<img src="./400px-United_States_Administrative_Divisions_Cities.svg.png" alt="">` );
 }
if (city=="New York") {
    document.write(`<img src="./new-york.png" alt="">` );
} 

}
cityinAmerica.map(cityinHtml);


//document.write("<button onclick='cklick(" + city.toString() + ")'  class= city>" + city + "</button>");