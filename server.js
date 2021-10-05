const express = require('express');  //is the module that enable us to create a restful api 
const bodyParser = require('body-parser'); //it allow us to use json back and forth between api and client
const cors = require('cors'); //to allow our restapi to be accessed from anywhere (CROSS ORIGINS)

const app = express();
const port = 40000;

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');//WE ALLOW ALL IP ADDRESSES
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');//WITH THIS WE ALLOW ALL THE HTTP VERBS
    res.header('Access-Control-Allow-Headers','Content-Type');//WITH THIS WE ALLOW THE USE OF THE HEADER CONTENT TYPE
    next();
});

//THE ACTUAL ENDPOINT


Completname = String('juan pablo lopez reyes');
adress = String('apodaca,margaritas,hacienda nogales,880');
school = String('tecnologico de nuevo leon');




var dat= new Date(); 
app.get('/fecha',function(req,res){
    res.send('Fecha '+dat);
});

app.get('/name',function(req,res){
    res.send('Nombre completo '+Completname);
});
app.get('/adress',function(req,res){
    res.send('Direccion '+adress);
});
app.get('/school',function(req,res){
    res.send('Nombre de la escuela '+school);
});
app.post('/suma',function(req,res){
    let a = parseInt(req.body.numa);
    let b = parseInt(req.body.numb);
    let suma = a + b;
    res.send('Resultado de la Suma '+ suma)
});
app.post('/resta',function(req,res){
    let a = parseInt(req.body.numa);
    let b = parseInt(req.body.numb);
    let resta = a - b ;
    res.send('Resultado de la resta '+ resta)
});
app.post('/multiplicacion',function(req,res){
    let a = parseInt(req.body.numa);
    let b = parseInt(req.body.numb);
    let c = parseInt(req.body.numc);
    let multiplicacion = a*b*c;
    res.send('Resultado de la multiplicacion '+ multiplicacion)
});
app.post('/divicion',function(req,res){
    let a = parseInt(req.body.numa);
    let b = parseInt(req.body.numb);
    let divicion = a/b;
    res.send('Resultado de la divicion '+ divicion)
});

app.post('/areacuadrado',function(req,res){
    let l = parseInt(req.body.lado);
    let Areacuad = l * l;
    res.send('Resultado del Area Cuadrado '+ Areacuad)
});
app.post('/areatriangulo',function(req,res){
    let base = parseInt(req.body.base);
    let altura = parseInt(req.body.altura);
    let Areatrian = (base * altura)/2;
    res.send('Resultado del Area de un Triangulo '+ Areatrian)
});

app.listen(port,function(){
    console.log('MY APP IS RUNNING AT THE PORT ' + port);
})