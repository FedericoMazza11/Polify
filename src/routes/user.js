const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");
const session = require('express-session')
const app = express();

// /Create crea un usuario en la DB

router.route("/create").post((req, res) => {
	const user = req.body.user;
	const password = req.body.password;
	const newUser = new userSchema ({
			user,
			password
		});
	newUser.save();
	console.log(newUser)
});

// /user hace un request de los usuarios en la base de datos, lo use para testear el .get con Axios

router.route("/user").get((req, res) => {
	userSchema.find().then(response => res.json(response))
});

// /login autentifica al usuario en la aplicacion

router.route("/login").post(async (req, res) => {
     var user = req.body.user;
     var password = req.body.password;
     console.log("usuario = " + req.body.user);
      try {
        var user = await userSchema.findOne({ user: user }).exec();
        if(!user) {
            console.log("no user")
            res.redirect("http://localhost:3000/");
        } else {
            if(user.password != password ) {
            console.log("no match")
            res.redirect("http://localhost:3000/");
            } else {
            	console.log(user.user);
            	var sess = req.session;
            	sess.user = user.user;

            	console.log(sess);
            }
        }

        
        
        
    } catch (error) {
      console.log(error)
    }
});

router.route("/login").get((req, res) => {

	console.log(req.session)
	userSchema.find().then(response => res.json(response))
});

module.exports = router;