import React from 'react'
import './index.css'

const Book = (props) => {
   
    const {image,heading1,paragph,heading3}=props;

    


    return (
        <>
           
            
           {console.log(props)}
            <div className='Book_body'>

                <img className='Book_img' src={image} alt="Img" />

                <div className='heading_Book'>
                    <h1>{heading1}</h1>
                    
                    <p>{paragph}</p>
                    <h3>{heading3}</h3>
                        
                    <button>Find a stay</button>
                </div>

            </div>
        </>

    )
}

export default Book;