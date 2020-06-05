import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
    state = {
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
        const { email, password} = this.state;

        axios({
           url: "/auth/login",
           method: "POST",
           data: {
               email,
               password
           } 
        })
        .then(response => {
            this.props.history.push("./App");
        }) 

        this.setState({
            email: "",
            password: ""
        });
    }

    render() {
        return (
            <div>
                <h1>This is the Login Page</h1>
                <form className="form">
                    <input
                        value={this.state.name}
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
                    <button onClick={this.handleFormSubmit}>Sign-In</button>
                </form>
            </div>
        )
    }
}

export default Login;