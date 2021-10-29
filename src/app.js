const express = require('express');
const app = express();
require('../src/db/conn');
const path = require("path");

const port = process.env.PORT || 3000;



// console.log(path.join(view_path));


app.listen(port, () => {
    console.log(`Connected on port ${port} `);
})
