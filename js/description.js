window.addEventListener("load", function () {
  getMovieFromLocalStorage()
    .then((movie) => {
      let a = displayMovieInfo(movie);
      return a;
    })
    .then((b) => {
      displayMovieCast(b);
    });
});

function displayMovieCast(movie) {
  let castArr = [];
  let crewArr = [];
  let {
    castOne,
    castTwo,
    castThree,
    castFour,
    castFive,
    castSix,
    castOneImg,
    castTwoImg,
    castThreeImg,
    castFourImg,
    castFiveImg,
    castSixImg,
    castOneCharacterName,
    castTwoCharacterName,
    castThreeCharacterName,
    castFourCharacterName,
    castFiveCharacterName,
    castSixCharacterName,
    crewOne,
    crewTwo,
    crewThree,
    crewFour,
    crewFive,
    crewSix,
    crewOneImg,
    crewTwoImg,
    crewThreeImg,
    crewFourImg,
    crewFiveImg,
    crewSixImg,
    crewOneCharacterName,
    crewTwoCharacterName,
    crewThreeCharacterName,
    crewFourCharacterName,
    crewFiveCharacterName,
    crewSixCharacterName,
  } = movie;

  let one = {
    castName: castOne,
    castImage: castOneImg,
    castCharacterName: castOneCharacterName,
  };

  let two = {
    castName: castTwo,
    castImage: castTwoImg,
    castCharacterName: castTwoCharacterName,
  };
  let three = {
    castName: castThree,
    castImage: castThreeImg,
    castCharacterName: castThreeCharacterName,
  };
  let four = {
    castName: castFour,
    castImage: castFourImg,
    castOneCharacterName: castFourCharacterName,
  };
  let five = {
    castName: castFive,
    castImage: castFiveImg,
    castCharacterName: castFiveCharacterName,
  };
  let six = {
    castName: castSix,
    castImage: castSixImg,
    castCharacterName: castSixCharacterName,
  };

  castArr.push(one);
  castArr.push(two);
  castArr.push(three);
  castArr.push(four);
  castArr.push(five);
  castArr.push(six);

  let oneCrew = {
    crewName: crewOne,
    crewImage: crewOneImg,
    crewCharacterName: crewOneCharacterName,
  };

  let twoCrew = {
    crewName: crewTwo,
    crewImage: crewTwoImg,
    crewCharacterName: crewTwoCharacterName,
  };
  let threeCrew = {
    crewName: crewThree,
    crewImage: crewThreeImg,
    crewCharacterName: crewThreeCharacterName,
  };
  let fourCrew = {
    crewName: crewFour,
    crewImage: crewFourImg,
    crewCharacterName: crewFourCharacterName,
  };
  let fiveCrew = {
    crewName: crewFive,
    crewImage: crewFiveImg,
    crewCharacterName: crewFiveCharacterName,
  };
  let sixCrew = {
    crewName: crewSix,
    crewImage: crewSixImg,
    crewCharacterName: crewSixCharacterName,
  };

  crewArr.push(oneCrew);
  crewArr.push(twoCrew);
  crewArr.push(threeCrew);
  crewArr.push(fourCrew);
  crewArr.push(fiveCrew);
  crewArr.push(sixCrew);

  showCastAr(castArr);
  showCrew(crewArr);
}

async function showCastAr(castArr) {
  let castRoll = document.querySelector(".castRoll");
  castArr.map((item) => {
    let castCard = document.createElement("div");
    castCard.setAttribute("class", "castCard");
    castCard.innerHTML = `<figure>
                  <img
                    src="${item.castImage}"
                    alt=""
                  />
                </figure>
                <div class="crewInfo">
                  <span>${item.castName}</span>
                  <span>${item.castCharacterName}</span>
                </div>`;
    castRoll.append(castCard);
  });
}

function showCrew(crewArr) {
  let crewRoll = document.querySelector(".crewRoll");
  crewArr.map((item) => {
    let crewCard = document.createElement("div");
    crewCard.setAttribute("class", "castCard");
    crewCard.innerHTML = `<figure>
                  <img
                    src="${item.crewImage}"
                    alt=""
                  />
                </figure>
                <div class="crewInfo">
                  <span>${item.crewName}</span>
                  <span>${item.crewCharacterName}</span>
                </div>`;
    crewRoll.append(crewCard);
  });
}

async function getMovieFromLocalStorage() {
  let id = await JSON.parse(localStorage.getItem("id"));
  let movies = await JSON.parse(localStorage.getItem("movies"));
  let movie = movies.filter((movie) => movie.movieId === id);
  return movie[0];
}

function displayMovieInfo(movie) {
  let {
    movieName,
    movieImage,
    movieBgImage,
    movieInfo,
    movieLength,
    movieGenre,
    movieReleaseDate,
    moviePrice,
  } = movie;

  let movieContainer = document.querySelector(".movieHeroSection");
  console.log(movieContainer);
  let div = document.createElement("div");
  div.setAttribute("class", "section");
  let movieInfoOne = `<figure>
            <img
              src="${movieImage}"
              alt=""
            />
          </figure>
          <div class="movieInfo">
            <h1>${movieName}</h1>
            <h2>
              <i class="fa-solid fa-star"></i><span>7.5/10</span
              ><span>4.1K votes</span>
            </h2>
            <div class="ratingInfo">
              <div class="ratingInfoOne">
                <p>Add your rating & review</p>
                <p>Your ratings matter</p>
              </div>
              <button type="button">Rate now</button>
            </div>
            <div class="movieType">
              <p><span>2D, MX4D</span></p>
              <p>${movieLength} . ${movieGenre} . A . ${movieReleaseDate}</p>
            </div>
            <button id="bookTicket" type="button" onclick="showModal()">Book Tickets</button>
          </div>`;

  div.innerHTML = movieInfoOne;
  movieContainer.append(div);
  let sectionHero = document.querySelector(".movieHeroSection");
  console.log(sectionHero);
  sectionHero.style.background = `linear-gradient(
      90deg,
      rgb(26, 26, 26) 24.97%,
      rgb(26, 26, 26) 50.3%,
      rgba(26, 26, 26, 0.04) 97.47%,
      rgb(26, 26, 26) 100%
    ), url(${movieBgImage})
    `;
  showInfo(movieInfo);
  let m = document.getElementById("movie");
  m.innerHTML = `<option value="${moviePrice}">${movieName} ($ ${moviePrice})</option>`;

  localStorage.setItem(
    "moviedetails",
    JSON.stringify({
      movieName: movieName,
      moviePrice: moviePrice,
    })
  );
  return movie;
}

function showInfo(info) {
  console.log(info);
  let movieK = document.querySelector("#movieInfo");
  console.log(movieK);
  movieK.innerText = info;
}

function closeModal() {
  localStorage.removeItem("selectedSeats");
  localStorage.removeItem("selectedMoviePrice");
  localStorage.removeItem("selectedMovieIndex");
  let selectSeat = document.querySelector(".selectSeat");
  selectSeat.style.display = "none";
}

function showModal() {
  let selectSeat = document.querySelector(".selectSeat");
  selectSeat.style.display = "grid";
  seatTicket();
}

function pay() {
  let movieDetails = JSON.parse(localStorage.getItem("moviedetails"));
  let seat = JSON.parse(localStorage.getItem("selectedSeats"));
  let total = JSON.parse(localStorage.getItem("totalprice"));
  let orderDetails = {
    movieDetails,
    seat,
    total,
  };
  localStorage.setItem("order", JSON.stringify(orderDetails));
  console.log(orderDetails);
  alert("redirecting to payment gateway...");
  location.href = "./PaymentGateway.html";
}

// =======================================================================================================================================
function seatTicket() {
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.sold)");
  const count = document.getElementById("count");
  const total = document.getElementById("total");
  const movieSelect = document.getElementById("movie");

  populateUI();

  let ticketPrice = +movieSelect.value;

  // Save selected movie index and price
  function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
  }

  // Update total and count
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map((seat) =>
      [...seats].indexOf(seat)
    );

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    localStorage.setItem("totalprice", JSON.stringify(total.innerHTML));

    setMovieData(movieSelect.selectedIndex, movieSelect.value);
  }

  // Get data from localstorage and populate UI
  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          console.log(seat.classList.add("selected"));
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
      console.log(selectedMovieIndex);
    }
  }
  console.log(populateUI());
  // Movie select event
  movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });

  // Seat click event
  container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
    ) {
      e.target.classList.toggle("selected");

      updateSelectedCount();
    }
  });

  // Initial count and total set
  updateSelectedCount();
}
