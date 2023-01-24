// Imported Modules
const express = require('express');
const get = require('./routes/get');
const post = require('./routes/post');
const put = require('./routes/put');
const patch = require('./routes/patch');
const dele = require('./routes/delete');
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());

// Routes
app.use('/', get)
app.use('/', post)
app.use('/', put)
app.use('/', patch)
app.use('/', dele)




// Listening at PORT
app.listen(PORT, () => {
    console.log("App started at port", PORT)
})