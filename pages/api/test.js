const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(8080, () => {
    console.log('serving on port 3000')
})