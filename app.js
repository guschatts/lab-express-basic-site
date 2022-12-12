const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

//home route
app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
});

//about route
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
});

//work route
app.get('/projects', (req, res) => {
    res.sendFile(`${__dirname}/views/projects.html`)
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})