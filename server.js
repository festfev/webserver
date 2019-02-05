const express = require('express');

const postsroute = require('./routes/post');




const app = express();
app.use('/', postsroute);


app.listen(5000, () => {
    console.log('Server started on port 5000.');
})