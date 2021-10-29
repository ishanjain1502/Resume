const express = require('express');
const app = express();
require('../src/db/conn');
const path = require("path");
const hbs = require('hbs');

const port = process.env.PORT || 3000;


// const view_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// console.log(path.join(view_path));


app.set("view engine", "hbs");
// app.use("views", view_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Connected on port ${port} `);
})
