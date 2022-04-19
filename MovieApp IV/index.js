
let data = JSON.parse(localStorage.getItem("movies"));
console.log(data);
data.map(function (el) {
  let img = document.createElement("img");
  img.src = el.imgURL;
  img.style.width = "100%";
  img.style.height = "80%";

  let name = document.createElement("p");
  name.innerText = el.name;
  name.style.fontWeight="600"
//   name.style.lineHeight="20px"
  let date = document.createElement("p");
  date.innerText = el.date;
//   date.style.lineHeight="15px"
  let rating = document.createElement("p");
  rating.innerText = el.rating;
  console.log(img,name,date,rating)
  let box = document.createElement("div");
//   box.style.border="1px solid blue";
  box.append(img, rating, name, date);
  document.querySelector("#container").append(box);
});
