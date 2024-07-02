let moviesList = [];
let bookedTicket = {
  movieName: "",
};

window.addEventListener("load", () => {
  this.localStorage.clear();
  fetchAllMovies()
    .then((body) => {
      return setUIData(body);
    })
    .then((item) => {
      return saveInLocalStorage("movies", item);
    });
});

async function fetchAllMovies() {
  let url = "http://cinemax.us-east-1.elasticbeanstalk.com/api/allMovies"
  let response = await fetch(`http://cinemax.us-east-1.elasticbeanstalk.com/api/allMovies`,{
    method: "get",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  let body = await response.json();

  if (response.status === 200) {
    return body;
  } else {
    alert("failed to fetch data");
  }
}

function setUIData(body) {
  let cardContainer = document.getElementById("cardContainer");
  body.map((movie) => {
    let { movieId, movieName, movieImage, movieGenre } = movie;
    let a = document.createElement("a");
    a.setAttribute("class", "movieCard");
    let singleCard = `
          <figure>
            <img
              src="${movieImage}"
              alt=""
            />
          </figure>
          <footer>
            <span class="heading">${movieName}</span>
            <span>${movieGenre}</span>
          </footer>
        `;
    a.innerHTML = singleCard;
    a.addEventListener("click", function () {
      saveInLocalStorage("id", movieId);
      window.location = "./Description.html";
    });
    cardContainer.append(a);
  });
  moviesList = [...body];
  return body;
}

function saveInLocalStorage(key, body) {
  localStorage.setItem(key, JSON.stringify(body));
  return "data saved in localstorage successfully";
}
