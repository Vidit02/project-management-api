const userModel = require('./models/users.model')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require("passport")
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'my-token-secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    userModel.findOne({"_id" : jwt_payload.id}).populate('role').exec(function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));