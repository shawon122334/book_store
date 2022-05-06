const res = require('express/lib/response');
const {BookDb}= require('../model/Book')

const getBook = async (req,res)=>{
    try{
        const books = await BookDb.find();
        return res.status(200).send(books)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}
const addBook = async (req,res)=>{
    const newBooks = new BookDb(req.body)
    try{
        const result = await newBooks.save()
        return res.status(201).send(result)
    }
    catch(err){
        return res.status(500).send({
            error : err
        })
    }
}
module.exports = {
    getBook,
    addBook
}