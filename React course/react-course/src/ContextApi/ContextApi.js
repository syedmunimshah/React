import React, { createContext } from 'react'
import Ccom from './Ccom';

const MyContext = createContext();

const ContextApi = () => {

  
  return (
   <> 
   <MyContext.Provider value={"Ali"}>  
   <Ccom/>

   </MyContext.Provider>
   
   </>
  )
}

export default ContextApi;
export {MyContext}