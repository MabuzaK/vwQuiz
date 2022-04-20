const express = require("express");
const app = express();

//const server = require("http").Server(app);
const bodyParser = require('body-parser');

//Layouts
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");

app.use(expressLayout);
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const frontendRoutes = require('./routes/index');

app.use(frontendRoutes)

app.get('/', (req, res)=>{
    console.log()
})

// Port listening from
const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))