//radiobutton
const allRadioButtons = document.querySelectorAll(".radio");
const allContainer = document.querySelectorAll(".container");

allRadioButtons.forEach((radio) => {
  radio.addEventListener("click", function (e) {
    e.preventDefault();
    allContainer.forEach((container) => {
      if (container.getAttribute("id") === radio.getAttribute("id")) {
        container.style.display = "grid";
      } else {
        container.style.display = "none";
      }
    });
  });
});

let products = JSON.parse(localStorage.getItem("products")) || [];
let basket = JSON.parse(localStorage.getItem("order")) || [];
let { movieDetails, seat, total } = basket;

let summaryTotal = document.getElementById("summaryTotal");
let orderTotal = document.getElementById("orderTotal");

summaryTotal.innerText = total;
orderTotal.innerText = total;

let cartItems = document.querySelector(".cartItems");
let div = document.createElement("div");
div.setAttribute("class", "orderInfo");
div.innerHTML = `<p>${movieDetails.movieName} x Seat No: ${seat}</p>
                  <p>${total}</p>`;
cartItems.append(div);

let checkOutButton = document.getElementById("checkOutButton");
checkOutButton.addEventListener("click", async function () {
  let cart = JSON.parse(localStorage.getItem("order"));
  //console.log(JSON.stringify(cart));
  let items = {
    name: cart.movieDetails.movieName,
    price: cart.movieDetails.moviePrice
  };
  console.log(items);
  let response = await fetch("http://cinemax.us-east-1.elasticbeanstalk.com/api/qrcode", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(items),
  });
  let body = await response.json();
  if (response.status === 200) {
    localStorage.setItem("response", JSON.stringify(body));
    location.href = "./success.html";
  }
});
