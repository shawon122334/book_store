const {Schema,model} = require('mongoose')

const bookSchema = Schema({
    name :{
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    available : {
        type : Boolean,
        required : true
    }
})
const BookDb = model('BookDb',bookSchema)

module.exports.BookDb = BookDb