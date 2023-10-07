import React, { useContext } from 'react'
import { MyContext } from "./ContextApi"

const Ccom = () => {
  const myval = useContext(MyContext)
  console.log("debug", myval);
  return (
    <>
      
      
      
            <h1>My name is {myval}</h1>
           
          
      

    
      </>
  
  )
}

export default Ccom