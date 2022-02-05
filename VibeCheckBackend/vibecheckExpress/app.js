//Add application requirements
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const port = 3001;

//
app.set("views", "views");

//Attach required middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("lolol");
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)  ;
});