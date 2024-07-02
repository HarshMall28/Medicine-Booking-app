const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/', express.static(path.join(__dirname, '/js')));
// app.use('/root', express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/api', require('./routes/api/database'));


app.get('/*', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.status(404).send("error 404 page not found");
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})