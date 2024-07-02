window.addEventListener("load", () => {});

let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2>Thank you booking. Here is your QR code. Scan at the check-in: </h2>
      <a href="${respose.url}" target="_blank">Bookings.pdf</a>`;
mainContainer.append(div);
