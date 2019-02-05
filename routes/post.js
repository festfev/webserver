const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webdb'
});



db.connect((err) => {
    if(err) throw err;
    console.log('Server connected to MySQL.')
})
//get all posts
router.get('/api/posts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    })
})
//insert post
router.post('/posts' , (req, res) => {

})
module.exports = router;