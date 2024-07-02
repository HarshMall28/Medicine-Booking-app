const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql");
const util = require("util");
const fs = require("fs");
const https = require("https");
var connection = mysql.createConnection({
  host: "mywebapp-instance-1.cvu9qoopyhpd.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "db_myapp",
  port: 3306,
});

// connection.connect((err) => {
//     if (err) {
//       console.log("Error occurred", err);
//     } else {
//       console.log("Connected to database");
//       var sql = "SELECT * FROM Products";
//       connection.query(sql, function (err, result) {
//         if (err) {
//           console.log(err);
//         }
//         console.log("New table created");
//       });
//     }
// });
router.route("/allMovies").get((req, res) => {
  console.log("Connected to database");
  var sql = "SELECT * FROM movies";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.json(result);
    //connection.end();
    console.log("New table created");
  });
});

router.route("/qrcode").post(async (req, res) => {
  console.log(`post/${util.inspect(req.body, false, null)}`);
  console.log("Connected to database. the resp is: " + req.body.name);
  // res.json({
  //   url: req.body.price,
  // });
  let data = {
    data: { 
      name: req.body.name, 
      price: req.body.price,
      date : "today",
      success : "successful"
    },
  };
  const result = await post(
    "https://raq06bxfrk.execute-api.eu-west-1.amazonaws.com/apiqrcode",
    data
  );

  let url2 = "https://newharshbucket.s3.eu-west-1.amazonaws.com/Bookings.pdf";
  let message = "Dear Customer, your booking for movie "+req.body.name+" has been placed successfully. Your bill is EUR "+req.body.price+" .Here is the link for your invoce. You can scan the QR Code for details "+url2;
  let data3 = {
    "from-email": "vikrantsonawane2@gmail.com",
    "from-name": "Cinemax",
    "subject": "Order: Movie Booking",
    "text-part": message,
    "recipients": [{ "Email": "vaishnaviwaghmare.bca@gmail.com" }]
  }
  const email = await post2("https://d6hv1f8eaf.execute-api.us-east-1.amazonaws.com/scp-project/sendmail", data3)
  console.log(email);
  res.json({
      url: "https://newharshbucket.s3.eu-west-1.amazonaws.com/Bookings.pdf",
    });
  let data2 = {
    name : "Booking",
    image : JSON.parse(result)
  }
  console.log(JSON.stringify(data2));
  const url = await post("https://g3fywtdvwa.execute-api.eu-west-1.amazonaws.com/stage1", data2)
  console.log(JSON.parse(url).url);
});

async function post(url, data) {
  const dataString = JSON.stringify(data);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // timeout: 1000, // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      // if (res.statusCode < 200 || res.statusCode > 299) {
      //   return reject(new Error(`HTTP status code ${res.statusCode}`))
      // }
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request time out"));
    });

    req.write(dataString);
    req.end();
  });
}


async function post2(url, data) {
  const dataString = JSON.stringify(data);
  const options = {
    method: "POST",
    // timeout: 1000, // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      // if (res.statusCode < 200 || res.statusCode > 299) {
      //   return reject(new Error(`HTTP status code ${res.statusCode}`))
      // }
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request time out"));
    });

    req.write(dataString);
    req.end();
  });
}

module.exports = router;
