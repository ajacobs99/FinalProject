const express = require('express');
const app = express(); 
const cors = require('cors'); 
const jwt = require('jsonwebtoken'); 
const exjwt = require('express-jwt'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const userModel = require('./models/userSchema'); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization'); 
    next(); 
}); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000; 
let url = 'mongodb://localhost27017/users'

const secretKey = 'My super secret key'; 

const jwtMW = exjwt({
    secret: secretKey, 
    algorithms: ['HS256']
}); 

app.post('/api/login', (req, res) => {
    const{ username, password } = req.body; 

    for(let user of users){
        if (username == user.username && password == user.password){
            let token = jwt.sign({ id : user.id, username: user.username }, secretKey, { expiresIn: '7d'}); 
                res.json({
                    success: true, 
                    err: null, 
                    token
                }); 
                break; 
        }
        else {
                res.status(401).json({
                    success: false, 
                    token: null, 
                    err: 'username or password is incorrect'
                }); 
            }
    }
}); 
//signup
app.post('/api/signup', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            userInfo = {
                email: req.body.email, 
                password: req.body.password, 
                token: req.body.token
                
            }; 
            userModel.insertMany(userInfo)
                .then((data)=>{
                    res.json(data);
                    mongoose.connection.close();  
                })
                .catch((connectionError)=>{
                    console.log(connectionError); 
                }); 
        })
        .catch((connectionError) => {
            console.log(connectionError); 
        }); 

}); 

app.get('/api/dashboard', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'Signed in user'
    });  
}); 

app.get('/api/prices', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'This is price!!!'
    });  
}); 
// code exercise 4
app.get('/api/welcome', jwtMW, (req, res) => {
    res.json({
        success: true, 
        myContent: 'Your new account has been created. Thank you for signing up !'
        
    });  
}); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
}); 

app.use(function (err, req, res, next){
    if (err.name === 'UnauthorizedError'){
        res.status(401).json({
            success: false, 
            officialError: err,
            err: 'username or password is incorrect 2'
        }); 
    }
    else{
        next(err);  
    }
}); 

app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`); 
}); 