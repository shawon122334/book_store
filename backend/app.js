const express = require('express')
const app = express() 
const mongoose = require('mongoose')
const bookRouter = require('./routes/book-routes')
const cors = require('cors')

// app.use('/',(req,res,next)=>{
//     res.send('application initialized')
// })

mongoose.connect('mongodb://localhost:27017/book_store_db')
    .then(()=> console.log('MongoDb connected'))
    .catch(err=> console.error(err))

app.use(express.json())
app.use(cors())
app.use('/books',bookRouter)

app.use((req,res)=>{
    return res.status(404).send('Not Found')
})

app.listen(5000,()=>{
    console.log('Listening on port 5000');
})