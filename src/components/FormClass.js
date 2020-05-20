import React, { Component } from 'react';
import '../App.css';

class FormClass extends Component {
    state = {
        personCard: [],
        person: {
                'firstname': '',
                'lastname': '',
                'email': '',
                'phone': '',
                'country': ''
        }
    }
    handleChange = e => {
        this.setState({ person : {...this.state.person, [e.target.name]: e.target.value}})
    }
    submitHandler = e => {
        e.preventDefault()
        this.setState({ personCard: [...this.state.personCard, this.state.person]})
    }

    render() {
        return (
            <div className="app">
                <form onSubmit= {this.submitHandler}>
                    <input type="text" name = 'firstname' onChange= { this.handleChange } placeholder= "Firstname" />
                    <input type="text" name = 'lastname' onChange= { this.handleChange } placeholder= "Lastname"/>
                    <input type="email" name = 'email' onChange= { this.handleChange } placeholder= "Email" />
                    <input type="tel" name = 'phone' onChange= { this.handleChange } placeholder= "Phone"/>
                    <input type="text" name = 'country' onChange= { this.handleChange } placeholder= "Country"/>
                    <button type="submit">Send</button>
                </form>
            
                {   this.state.personCard && 
                    this.state.personCard.map( (item, index) => <div key={index} className="card">
                                                        <p>Firstname : {item.firstname}</p>
                                                        <p>Lastname : {item.lastname}</p>
                                                        <p>Email : {item.email}</p>
                                                        <p>Phone : {item.phone}</p>
                                                        <p>Country : {item.country}</p>
                                                    </div>
                    )
                }
            </div>
        );
    }
}

export default FormClass;
