import React, { useState } from 'react'
import '../App.css';


function FormHooks () {

    const [ personCard, setPersonCard ] = useState([])
    const [ person, setPerson ] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'phone': '',
        'country': ''
    })

    const handleChange = name => e => {
        setPerson({...person, [name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        setPersonCard([...personCard, person])
    }

    return (
        <div className="app">
            <form onSubmit= {submitHandler}>
                <input type="text" onChange = { handleChange('firstname') } placeholder= "Firstname" />
                <input type="text" onChange = { handleChange('lastname') } placeholder= "Lastname"/>
                <input type="email" onChange = { handleChange('email') } placeholder= "Email" />
                <input type="tel" onChange = { handleChange('phone') } placeholder= "Phone"/>
                <input type="text" onChange = { handleChange('country') } placeholder= "Country"/>
                <button type="submit">Send</button>
            </form>
           
            {   personCard && 
                personCard.map( (item, index) => <div key={index} className="card">
                                                    <p>Firstname : {item.firstname}</p>
                                                    <p>Lastname : {item.lastname}</p>
                                                    <p>Email : {item.email}</p>
                                                    <p>Phone : {item.phone}</p>
                                                    <p>Country : {item.country}</p>
                                                </div>
                )
            }
        </div>
    )
}

export default FormHooks;

