import React, { useState } from 'react'

const UseState = () => {
   
  const[Data,SetData]=useState(0)
 
  const Inc=(()=>{
SetData(Data+1);
  })
  const Dec=(()=>{
SetData(Data-1);
  })

  return (
    <>
     
        <h1>{Data}</h1>
        <button onClick={Inc}>+</button>
        <button onClick={Dec}>-</button>

    </>
  )
}

export default UseState;