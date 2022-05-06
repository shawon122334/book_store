const express = require('express')
const app = express() 
const mongoose = require('mongoose')


app.use('/',(req,res,next)=>{
    res.send('application initialized')
})

mongoose.connect('mongodb://localhost:27017/book_store_db')
    .then(()=> console.log('MongoDb connected'))
    .catch(err=> console.error(err))

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})