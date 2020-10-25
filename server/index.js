const express = require('express');
require('./models/user');
require('./services/passport');

const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');


const app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
//app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,   //30 days
    keys: [keys.COOKIE_KEY]
}))
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
const authRoutes = require('./routes/authRoutes')
app.use(authRoutes);

const PORT = process.env.PORT || 5001;


//const db = require('./services/db');
// db.initDb((err, client) => {
//     if (err) console.log(err);
//     // start the rest of your app here
//     app.listen(PORT);
// });

const mongoose = require('mongoose');

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });
app.listen(PORT);

const mongoose_db = mongoose.connection;

mongoose_db.on('error', console.error.bind(console, 'connection error:'));
mongoose_db.once('open', function () {
    // we're connected!
    console.log({
        mongoose: 'Connected :)'
    })
});
