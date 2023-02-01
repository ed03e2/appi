const express = require('express')
const mysql = require('mysql2')
var cors = require('cors')
const bcrypt = require('bcrypt')
const fileUpload = require('express-fileupload')
const  morgan = require('morgan')
var jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database:'tutorias',
    password:''
   
})
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cors())
app.use(fileUpload())
app.get('/', function (req, res){
})
app.get('/prueba', (req, res)=>{
 res.send({
    mensaje :"enviado",
 })
})

app.post("/alumnos/agregar", (req, res) => {
    const{ matricula,nombre, tipo, password}= req.body;

    bcrypt.hash(password, saltRounds, function (err, hash){
        const sql = "INSERT INTO alumnos2 VALUES(?,?,?,?)";
        bcrypt.hash(password, saltRounds, function(err, hash){
            db.query(sql, [matricula, nombre, tipo, hash], (err, result)=>{
            if(err){
                res.send({
                    status:100,
                    errNo:err.errno,
                    mensaje:err.message,
                    codigo: err.code,
                });
            }else{
                res.send({
                    status:200,
                    errNo:false,
                    mensaje:"registrado",
                    codigo: result.affectedRows, 
                });
            }
        });
    });
    });
});


const port = 5000
const saltRounds = 10

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
})