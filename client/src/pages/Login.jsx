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
        const { email, password } = this.state;

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
                <div><br/>    <br />    <br /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ backgroundColor: "whitesmoke" }} >
                         {/* <img className="centralize" src="" className="logo" alt="Logo" /> */}
                            <h1 style={{ textAlign: "center" }}>   Welcome to Pet Buddy</h1>
                          <h3 style={{ textAlign: "center" }}>Find your pet buddy today.</h3>
                            <h3 style={{ textAlign: "center" }}>Login & have fun!</h3>
                            <br />
                                 <br />
                            <form className="form form-group" style={{textAlign: "center",   display: "inlineBlock"}}>
                                <input
                                    value={this.state.name}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="email"
                                    className="form-control-lg"
                                    style= {{width: "90%"}}
                                />
                                <br />
                                <br />
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                    className="form-control-lg"
                                    style= {{width: "90%"}}
                                />
                                 <br />
                                 <br />
                                <button 
                                onClick={this.handleFormSubmit}
                                className="btn btn-success"
                                style={{width:"50%"}}
                                >
                                Sign-In</button>
                            </form>
                            <br />
                            <p>Or sign up <a href="/Register">here</a></p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}
    export default Login;