import React, { useState } from 'react'

const UseStateForm = () => {

    const [formData,SetformData]=useState({
        name:'',
        email:'',
        pas:'',


    })
const handleInput=(e=>{


const{name,value}=e.target;
SetformData({...formData,[name]:value});


})
    // const [name,setname]=useState("");
    // const [email,setemail]=useState("");
    // const [pas,setpas]=useState("");
    

    // const handleText=(e=>{

    //      setname(e.target.value);
    // })

    // const handleEmail=(e => {
       
    //     setemail(e.target.value)
    // })

    // const handlepas =(e=>{
    //     setpas(e.target.value)

    // })
  return (
   <>
   {/* <label >Name</label>
    <input  type="text" value={name} onChange={handleText} /> 
    {name} <br />
   <label >Email</label>
    <input  type="email" value={email} onChange={handleEmail} /> 
    {email} <br />
   <label >Password</label>
    <input  type="password" value={pas} onChange={handlepas} /> 
    {pas} <br /> */}

   <label >Name</label>
    <input  type="text" name='name' value={formData.name} onChange={handleInput} /> 
    {formData.name} <br />
   <label >Email</label>
    <input  type="email" name='email' value={formData.email} onChange={handleInput} /> 
    {formData.email} <br />
   <label >Password</label>
    <input  type="password" name='pas' value={formData.pas} onChange={handleInput} /> 
    {formData.pas} <br />
   </>
  )
}

export default UseStateForm;