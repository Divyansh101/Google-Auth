var passport        = require('passport')
var googleStratergy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new googleStratergy({
    //options for google stratergy

    callbackURL : "/auth/google/redirect",
    clientID    : '404176959243-c3i0rh59374avv7hp3t85l4p38d1ge29.apps.googleusercontent.com',
    clientSecret: 'c2DbLGY3Fn4p0p9DKY61QBAr'
},(accessToken, refreshToken, profile, done)=>{
    return done(profile.family_name);
})
)