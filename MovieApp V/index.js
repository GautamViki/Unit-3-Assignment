let data = JSON.parse(localStorage.getItem("movies"));
// console.log(data);
window.addEventListener("load", function () {
  displayData(data);
});
function lowToHigh() {
  data.sort(function (a, b) {
    // console.log(typeof(Number(a.rating)))
    return Number(a.rating) - Number(b.rating);
  });
  displayData(data);
}

function highToLow() {
  data.sort(function (a, b) {
    // console.log(typeof(Number(a.rating)))
    return Number(b.rating) - Number(a.rating);
  });
  displayData(data);
}
function displayData(data) {
  document.querySelector("#container").innerHTML = "";
  data.map(function (el) {
    let img = document.createElement("img");
    img.src = el.imgURL;
    img.style.width = "100%";
    img.style.height = "80%";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.style.fontWeight = "600";
    let date = document.createElement("p");
    date.innerText = el.date;
    let rating = document.createElement("p");
    rating.innerText = el.rating;
    let box = document.createElement("div");
    box.append(img, rating, name, date);
    document.querySelector("#container").append(box);
  });
}
