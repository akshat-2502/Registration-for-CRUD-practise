const express = require('express');
const app = express();


//engine
app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
    resp.render('index')
})

console.log("Server Running on port 5000")

app.listen(5000)