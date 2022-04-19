// src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"

function getData() {
  let city = document.getElementById("city").value;
  //   console.log(city)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d741f671c4b831304bc56ef0b6d1b7a6`;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      appendData(res);
      console.log(res);
      // console.log("************")
    })
    .catch(function (err) {
      console.log(err);
    });
  document.getElementById("city").value = null;
}

function appendData(data) {
  let box = document.getElementById("container");
  box.innerText = null;

  let map = document.getElementById("gmap_canvas");

  let name = document.createElement("p");
  name.innerText = `city : ${data.name}`;

  let minTemp = document.createElement("p");
  minTemp.innerText = `minimum temp. : ${data.main.temp_min}`;

  let maxTemp = document.createElement("p");
  maxTemp.innerText = `max temp. : ${data.main.temp_max}`;

  let currentTemp = document.createElement("p");
  currentTemp.innerText = `current temp. : ${data.main.temp}`;

  let humidity = document.createElement("p");
  humidity.innerText = `humidity : ${data.main.humidity}`;

  box.append(name, minTemp, maxTemp, currentTemp, humidity);
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
