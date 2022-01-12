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

if (city=="San Francisco") {
    document.write(`<img src="./san-francisco.png" alt="">` );
} 
if (city=="Los Angeles") {
    document.write(`<img src="./los-angeles.png" alt="">` );
} 

if (city=="Chicago") {
    document.write(`<img src="./chicago.png" alt="">` );
} 
if (city=="Las Vegas") {
    document.write(`<img src="./las-vegas.png" alt="">` );
} 
if (city=="Miami") {
    document.write(`<img src="./miami.png" alt="">` );
} 
if (city=="Washington") {
    document.write(`<img src="./waschington.jpeg" alt="">` );
} 

if (city=="Alabama") {
    document.write(`<img src="./alabama.png" alt="">` );
} 

}
cityinAmerica.map(cityinHtml);


//document.write("<button onclick='cklick(" + city.toString() + ")'  class= city>" + city + "</button>");