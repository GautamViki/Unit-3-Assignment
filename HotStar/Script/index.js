let showMov = document.getElementById("show-movie");
// const query = document.getElementById("search").value;

let id;

async function searchMovies() {
      try {
            const query = document.getElementById("search").value;

            let res = await fetch(
                  `https://api.themoviedb.org/3/search/movie?api_key=d683e9a433a3ce0945ae2938a844bad7&language=en-US&page=1&include_adult=false&query=${query}`
            );

            let data = await res.json();
            data = data.results;
            // console.log(data);
            return data;
      } catch (err) {
            console.log("err", err);
      }
}

function appendMovies(data) {
      // optimization 1
      showMov.innerHTML = null;

      showMov.style.maxHeight = "500px";
      showMov.style.overflow = "scroll";
      showMov.style.paddingTop = "10px";
      showMov.style.backgroundColor = "#121926";

      data.forEach(function (el, idx) {
            let movieDiv = document.createElement("div");
            // movieDiv.style.border="1px solid blue"
            movieDiv.style.backgroundColor = "#515763";
            movieDiv.style.height = "fit";
            movieDiv.style.paddingBottom = "1px";
            // movieDiv.style.padding="10px 0px"

            let image = document.createElement("img");
            image.src = `https://image.tmdb.org/t/p/original/${el.poster_path}`;
            image.style.width = "120px";
            image.style.height = "180px";
            image.style.paddingTop = "10px";

            let name = document.createElement("p");
            name.innerText = el.original_title;
            // name.style.border = "1px solid green";
            name.style.marginBottom = "20px";
            name.style.marginTop = "-4px";
            name.style.fontSize = "18px";
            name.style.fontWeight = "bold";
            name.style.color = "white";

            movieDiv.addEventListener("click", function () {
                  console.log(idx, el.Title);
                  showDetails(idx, data);
            });

            movieDiv.append(image, name);
            showMov.append(movieDiv);
      });
}

async function main() {
      let data = await searchMovies();
      console.log(data);
      if (data === undefined) {
            return false;
      }
      appendMovies(data);
      // console.log(data);
}

function debounce(func, delay) {
      if (id) {
            clearTimeout(id);
      }
      id = setTimeout(function () {
            func();
      }, delay);
}

// let movieArr=[];
function showDetails(idx, data) {
      let movieArr = [];
      console.log(data[idx]);
      movieArr.push(data[idx]);
      window.open("html/movieDetail.html", "_blank");
      localStorage.setItem("hotsatarObject", JSON.stringify(movieArr));
}

let url = `https://api.themoviedb.org/3/trending/all/day?api_key=d683e9a433a3ce0945ae2938a844bad7`;
fetch(url)
      .then(function (res) {
            return res.json();
      })
      .then(function (res) {
            console.log(res.results);
            trendingFun(res.results);
      })
      .catch(function (err) {
            console.log(err);
      });

function trendingFun(data) {
      data.forEach(function (el, idx) {
            let box = document.createElement("div");
            box.style.boxShadow =
                  "rgb(0, 0, 0) 0px 2px 4px 0px, rgb(156, 154, 154) 0px 2px 16px 0px";
            box.style.borderRadius = "7px";
            box.style.width = "145px";
            // box.style.margin="10px 0px"
            // box.style.border="1px solid red"

            let img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/original/${el.poster_path}`;
            img.style.height = "200px";
            img.style.width = "145px";
            // img.style.objectFit="cover"
            img.style.borderRadius = "7px 7px ";
            img.style.marginBottom = "-4px";

            let title = document.createElement("p");
            title.style.fontWeight = "1000";
            title.style.textAlign = "center";
            title.style.marginTop = "2px";
            if (el.original_title == undefined) {
                  title.innerText = el.original_name;
            } else {
                  title.innerText = el.original_title;
            }
            // title.innerText = el.original_title;
            box.append(img);
            document.getElementById("trending").append(box);
      });
}
