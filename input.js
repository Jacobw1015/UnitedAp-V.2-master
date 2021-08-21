
const express = require('express');
const {router} = require('./router');
const path = require('path');
const port = 5000;

let app = express();
app.use(express.static(path.join(__dirname,'public','html')));
app.use(express.static(path.join(__dirname,"public","Heirarchypics")))
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/',router);


app.listen(port,()=>{console.log('server is running on: '+port)})