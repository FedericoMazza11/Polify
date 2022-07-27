const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.use(cors());
app.use(express.json());
app.use(cookieParser('r767'));
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "r767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay,
    httpOnly: false,
    secure: false  },
    resave: true
}));



//Mongoose connection



const URI = `mongodb+srv://Polo:polifyadmin@cluster0.batdx.mongodb.net/myFirstDatabase`;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB')
});


//Route request

app.use("/", require("./routes/user"));


app.listen(3001, function() {
	console.log("Port: 3001")
})
