import { Button } from '@mui/material'
import React from 'react'
import './Book.css'

const Book = (props) => {
    const {_id,name,author,description,price,image} = props.book
  return (
    <div  className = 'book'>
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p> 
        <h2>BDT {price}</h2> 
        <Button sx={{mt : "auto"}}>Update</Button> 
        <Button sx={{mt : "auto"}}>Delete</Button>
    </div>
  )
}

export default Book