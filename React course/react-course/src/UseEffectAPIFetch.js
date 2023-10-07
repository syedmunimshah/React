import React, { useEffect, useState } from 'react'

const UseEffectAPIFetch = () => {
    const [users, setusers] = useState();

    function xyz(){
        fetch('https://api.github.com/users')
            .then(Response => Response.json())
            .then((data) =>{ 
                console.log(data)
                setusers(data)
            
            })

            .catch(error => console.error(error))
    }

    useEffect(() => {
            xyz()
    }, [])
    // useEffect(() => {
    //         fetch('https://api.github.com/users')
    //         .then(Response => Response.json())
    //         .then((data) =>{ 
    //             console.log(data)
    //             setusers(data)
            
    //         })

    //         .catch(error => console.error(error))
    // }, [])
   

    // async function abcd(){
    //     const Response=await fetch('https://api.github.com/users')
    //     const data= await Response.json();
    //          console.log(data)
    //          setusers(data)
        

        
    //     }

    // useEffect(() => {
       
    //     //    abcd();
    // }, [])
   
 

    


    return (
        <>
            <h1>UseEffectAPIFetch</h1>
            <ul>
            {
                    users?.map(user => {
                        return <li key={user.id}>
                           
                            <a href={user.html_url}> {user.login}</a>

                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default UseEffectAPIFetch;

