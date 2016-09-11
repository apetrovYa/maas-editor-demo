const path = require('path');
const express = require('express');
const app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req,res)) {
        res.sendFile(__dirname + '/dist/index.html');
    });

app.listen(PORT, function(error){
    if (error) {
        console.log(error);
        } else {
            console.log("===> [] Listending on port $s.", PORT);
            }
    });    
