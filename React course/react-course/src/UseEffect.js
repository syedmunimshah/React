import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [clicked,setclicked]=useState();

    useEffect(()=>{
        alert("alert   alert")
    },[])
  return (
    <>
        <button onClick={()=>setclicked('Subscribe')}>Subscibe</button>
        <br />
        <hr />
        <button  onClick={()=>setclicked("To")}>To</button>
        <br />
        <hr />
        <button onClick={()=>setclicked('dropdown')}>DropDown</button>
        <br />
        <hr />
        <h1>{clicked}</h1>
    </>
  )
}

export default UseEffect;