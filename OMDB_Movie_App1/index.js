let url;

function getName() {
  let name = document.getElementById("name").value;
  url = `https://www.omdbapi.com/?t=${name}&apikey=41c2a909`;

  let res;
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      if (res.Response === "False") {
        document.getElementById("container").innerText = "";
        console.log("Movie not found");
        let errorImg = document.createElement("img");
        let errUrl =
          "https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png";
        errorImg.src = errUrl;
        errorImg.style.width = "100%";
        errorImg.style.height = "450px";
        errorImg.style.borderRadius = "10px";

        let container = document.getElementById("container");
        container.append(errorImg);
      } else {
        appendData(res);
      }
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

function appendData(el) {
  document.getElementById("container").innerText = "";

  let box = document.createElement("div");
  box.style.padding = "10px 30px 20px 0px";

  let name = document.createElement("h2");
  name.innerText = `${el.Title} (${el.Year})`;

  let genre = document.createElement("p");
  genre.innerText = el.Genre;

  let director = document.createElement("p");
  director.innerText = `Director : ${el.Director}`;

  let writer = document.createElement("p");
  writer.innerText = `Writer : ${el.Writer}`;

  let actor = document.createElement("p");
  actor.innerText = `Actor : ${el.Actors}`;

  let plot = document.createElement("p");
  plot.innerText = `Plot : ${el.Plot}`;

  let country = document.createElement("p");
  country.innerText = `Country : ${el.Country}`;

  let lang = document.createElement("p");
  lang.innerText = `Language : ${el.Language}`;

  let rele = document.createElement("p");
  rele.innerText = `Released : ${el.Released}`;

  let img = document.createElement("img");
  img.src = el.Poster;
  img.style.height = "400px";
  img.style.width = "40%";
  img.style.padding = "30px";

  let rated = document.createElement("p");
  rated.innerText = `Rated : ${el.Rated}`;

  let rating = document.createElement("p");
  rating.innerText = `IMDB : ${el.imdbRating}`;

  box.append(
    name,
    genre,
    rating,
    director,
    writer,
    actor,
    plot,
    country,
    lang,
    rele
  );

  document.getElementById("container").append(img, box);
}
