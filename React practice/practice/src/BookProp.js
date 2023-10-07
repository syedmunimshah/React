import React from 'react'
import BookList from './BookList';
import books from './BookList.json'


const BookProp = () => {


  

 
  
  return (
    <>
 {
  books.map( (ele) =>{
   return <BookList img={ele.img} heading={ele.heading} para={ele.para} btn={ele.btn} name={ele.name}
    />
  })
 }
   
         
    </>
   
  )
}

export default BookProp;