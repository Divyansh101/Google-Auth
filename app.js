var express = require('express')
var passport = require('passport');
var mongoose = require('mongoose')
var passportSetup = require('./config/passport-setup')

var app = express();

app.use(passport.initialize());
app.use(passport.session());

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.set("view engine", "ejs");

app.get("/login", (req, res)=>{
    res.render("login.ejs");
})

app.get("/auth/google/redirect", passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res, profile, done) {
  res.render("loggedin");
});

app.get("/auth/google", passport.authenticate('google',{
    scope: ['profile']
}
)); 

app.listen(3000,()=>{
    console.log("server has started");
})
