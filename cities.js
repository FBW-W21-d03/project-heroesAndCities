const cityinAmerica =["New York", "San Francisco", "Los Angeles", "Chicago", "Las Vegas", "Miami", "Washington", "Alabama"];

cityinAmerica.sort();
function cityinHtml (city) {

    document.write("<p class= city>" + city + "</p>");
}
cityinAmerica.map(cityinHtml);