require('../config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.json('hello world');
});


app.post('/usuario', function(req, res) {

    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,
            descripcion: "Falta el nombre"
        })
    }else{
        
    res.json({
        body
    })
    }

});

app.listen(process.env.PORT,()=>{
    console.log("Escuchando puert0: ",process.env.PORT);
})