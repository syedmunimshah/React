import React from 'react'
import Book from './Book';
import books from "./Book.json"
const BookList = () => {

   




    return (
        <>
        { books.map((elem)=>{
          return  <Book image={elem.image} heading1={elem.heading1} paragph={elem.paragph} heading3={elem.heading3} />
      
        })}
            
           
          
        </>
    )
}

export default BookList;