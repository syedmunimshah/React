import React from 'react';
import {Products} from "./Page/Products"
import {Product} from './Page/Product';
import {Cart} from "./Page/Cart";
import {NotFound} from "./Page/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{Navbar} from "./Component/Navbar"

const App = () => {
  return (
    <>
     
    <Navbar/>
    <Routes>        
      <Route path="/"  element={<Products/>} />
      <Route path="/product/:productId"  element={<Product />}/>
      <Route path="/cart"  element={<Cart/>}/>
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
     
    </>
  )
}

export default App