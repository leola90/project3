import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        const { username, email, password} = this.state;

        axios({
           url: "/api/users/signup",
           method: "POST",
           data: {
               username,
               email,
               password
           } 
        })
        .then( res => {
            this.props.history.push("./Member");
        })
        .catch (err => {
            console.log(err.data)
        });

        this.setState({
            username: "",
            email: "",
            password: ""
        });
    }

    render() {
        return (
            <div>
                <h1>This is the Register Page</h1>
                <form className="form">
                    <input
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="username"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Register;