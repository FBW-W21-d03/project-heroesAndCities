const city = [
  "New York",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Las Vegas",
  "Miami",
  "Washington",
  "Alabama",
];

function addElem(cities) {
  document.write("<p class='cities'>" + cities + "</p>");
}
city.map(addElem);
document.getElementsByTagName("h2")[0].style.color = "red";
document.getElementsByTagName("h2")[1].style.color = "red";

document.getElementsByTagName("body")[0].style.backgroundColor = "#A4C6F2";
document.getElementsByClassName("cities")[0].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[1].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[2].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[3].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[4].style.boxShadow =
  "10px 20px 30px blue";

document.getElementsByClassName("cities")[5].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[6].style.boxShadow =
  "10px 20px 30px blue";
document.getElementsByClassName("cities")[7].style.boxShadow =
  "10px 20px 30px blue";

////////////////////////////////////////////////////////////////
//// use addEventlistener////////
const myEdit = document.getElementsByClassName("cities");
const btnCitys = document.getElementById("btnCity");

btnCitys.addEventlistener("click", () => {
  console.log("hallo");
  document.getElementsByClassName("cities")[4].style.boxShadow =
    "10px 20px 30px red";
  //btnCitys.innerHTML = "ccc";
});

////////
