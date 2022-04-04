const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


// view engines
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'../views'));


// static files
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));


// listen for request
app.listen(port);

// routing
app.get("", (req, res) => {
    res.render('index', {title: 'Home'})
});

app.get("/about", (req, res) => {
    res.render('about', {title: 'AboutUs'})
});

app.get("/weather", (req, res) => {
    res.render('weather', {title: 'Weather'})
});

app.use((req,res) => {
    res.status(404).render('404error', {title: '404 Not Found',errorMsg: 'Opps! Page Not Found'})
});



