import React, { useState } from 'react'
import "./style.css"
import { useForm } from "react-hook-form";

const FormUseform = () => {
  const { register, handleSubmit, formState: { errors }, watch,reset } = useForm();
  const password = watch("password");
  const [formData, setFormData] =useState([])
 

  const handleRegistration = (data) =>  {
    console.log(data);
    setFormData([...formData, data]);
  
    // Reset the form
    reset();
    
  }

  

  return (
    <>
      <div className='FormBody'>
        <h1>Form</h1>
        <form action="" onSubmit={handleSubmit(handleRegistration)}>
          <label htmlFor="name" >Name</label>
          <input type="text" name="name" {...register('name', { required: 'Name is Required' })} />
          {errors.name && <span> {errors.name.message}</span>}
          <br />
          <label htmlFor="name">Email</label>
          <input type="email" name='email' {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Email is Invalid" } })} />
          {errors.email && <span> {errors.email.message}</span>}
          <br />

          <label htmlFor="name">Password</label>
          <input type='password' name='password' autoComplete="new-password" {...register('password', {
            required: "Password is required", minLength: { value: 6, message: "Password must have at least 6 characters" }
          })} />
          {errors.password && <span> {errors.password.message}</span>}
          <br />
          <label htmlFor="name">Conform Password</label>
          <input type="password" name='Confirmpassword' autoComplete="new-password" {...register('Confirmpassword', { required: "Confirmpassword is required", validate: value => value === password || "Password do Not match" })} />
          {errors.Confirmpassword && <span> {errors.Confirmpassword.message}</span>}
          <br />

          <label htmlFor="name">Age</label>
          <input type="text" name='age'{...register('age', {
            required: 'Age is required', pattern: { value: /^\d+$/, message: 'Age must be a number', }, validate: (value) => {
              const age = parseInt(value, 10); if (isNaN(age) || age < 18) {
                return 'You must be at least 18 years old';
              }
              return true;
            },
          })}
          />
          {errors.age && <span> {errors.age.message}</span>}
          <br />

          <label htmlFor="name">Gender</label>
          <select name="gender" {...register('gender', {required: 'Gender is required',})}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <br />

          <button >submit</button>
        </form>
      </div>

    
        <div className='FormData'>
        
          {formData.map((data, index) => (
            
            <div key={index}>
            <h2>Form Data</h2>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Password: {data.password}</p>
              <p>Confirm Password: {data.Confirmpassword}</p>
              <p>Age: {data.age}</p>
              <p>Gender: {data.gender}</p>
              <hr />
            </div>
          ))}
        </div>
   
    </>
  )
}

export default FormUseform;