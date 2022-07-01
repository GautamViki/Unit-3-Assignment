let details=JSON.parse(localStorage.getItem("hotsatarObject"));
console.log(details);

function read(id) {
    return document.getElementById(id);
  }

details.forEach(function(el){
    read("img").src=`https://image.tmdb.org/t/p/original/${el.poster_path}`;
    read("title").innerText=el.title;
    read("overView").innerText=el.overview;
    read("releaseDate").innerText=el.release_date;
    read("popularity").innerText=el.popularity;
    read("lang").innerText=el.original_language;
    read("vote").innerText=el.vote_count;
})