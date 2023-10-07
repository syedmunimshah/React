import React, { useReducer, useState } from 'react'

const UseReduce = () => {

    // 2nd line 
    function reducer (state,action){
        console.log(state,action)
        // 4rt line 
        if(action.type==="inc"){
            return {count:state.count+1}
        }
        else if(action.type==="dec"){
            return {count:state.count-1}
        }
    }

    // 1st line 
    const [state, dispatch] = useReducer(reducer, {count:0}) 

 const Inc=(()=>{
    // 3rd line 
        return dispatch({type:"inc"})
    })
    const Dec=(()=>{
        return dispatch({type:"dec"})
    })
  return (
    <>

        <div>UseReduce</div>

        <h1>{state.count}</h1>
 <button onClick={Inc}>+</button>
 <button onClick={Dec}>-</button>


    </>
  )
}

export default UseReduce;