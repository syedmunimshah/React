import React from 'react'
import './BookList.css'


const BookList = (Props) => {
 const {img,heading,para,btn,name} = Props;
   
    return (

        <>

            <div className='Book_body'>



                <img className='Book_img' src={img} alt="img1" />
                
                <div className='heading_Book'>
                <h1>{name}</h1>
                    <h1> {heading} </h1>
                    <p>{para}</p>
                  
                   

                    <button> {btn}</button>
                   

                </div>

            </div>
        </>
    )
}

export default BookList;