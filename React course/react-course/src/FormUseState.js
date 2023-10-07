import React, { useState } from 'react'

const FormUseState = () => {

    // const [name, setname] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");

    // const handleText = (e) => {
    //     console.log(e.target.value);
    //     setname(e.target.value);
    // }

    // const handleEmail = ((em) => {
    //     console.log(em.target.value);
    //     setEmail(em.target.value);
    // })

    // const handlePassword = ((p) => {
    //     console.log(p.target.value);
    //     setPassword(p.target.value);
    // })

    const [formData, setformData] = useState({
        name: '',
        email: '',
        Password: '',
     
    })
    const handleInput = ((e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })

    })

    const handleForm = ((e) => {
        e.preventDefault();
    })
    return (
        <>
            <form onSubmit={handleForm}>
                <label>Name:
                    <br />
                    <input type="text" name='name' value={formData.name} onChange={handleInput} />
                    {formData.name}
                </label>
                <br />
                <br />

                <label> Email :

                    <br />
                    <input type="email" name='email' value={formData.email} onChange={handleInput} />
                    {formData.email}
                </label>
                <br />
                <label >Password
                    <br />
                    <input type="password" name='Password' value={formData.Password} onChange={handleInput} />
                    {formData.Password}

                </label><br />
                <button type='submit'>submit</button>
                <br />
                
            </form>
        </>


    )
}

export default FormUseState;