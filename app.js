const express = require('express');
const app= express();
const mongoose=require('mongoose');
require('dotenv/config');
const cors= require('cors');

//Middlewares
// app.use('/posts',()=>{
//     console.log('THIs is a middleare running');
// })

const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(cors());


//Import Routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);

app.get('/',(req,res)=>{
    res.send('We are home');
})

//connect to DB
mongoose.connect(process.env.DB_CONNECTION1, { useNewUrlParser: true ,useUnifiedTopology: true }, () =>{
    console.log('connected to DB')
})
//Listen to Server 
app.listen(3000);
