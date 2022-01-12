const cities = ["New York", "San Francisco", "Los Angeles", "Chicago", "Las Vegas","Miami", "Washington", "Albama"];

function addElem(city) {
    document.write("<p class='cities'>" + city + "</p>")
}
cities.map(addElem);