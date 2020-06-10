import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/NavBar"

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
        const { username, email, password } = this.state;

        axios({
            url: "/auth/signup",
            method: "POST",
            data: {
                username,
                email,
                password
            }
        })
            .then(res => {
                this.props.history.push("./App");
            })
            .catch(err => {
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
                <div><br />    <br />    <br /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ backgroundColor: "whitesmoke", padding:"3%" }} >
                            {/* <img className="centralize" src="" className="logo" alt="Logo" /> */}
                            <h1 style={{ textAlign: "center" }}> Welcome to Pet Buddy</h1>
                            <br />
                            <h4 style={{ textAlign: "center" }}>The Only Social Network for Pet Owners and Pet Enthusiasts!</h4>
                            <br />
                            <h4 style={{ textAlign: "center" }}>Sign Up Now & Have Fun!</h4>
                            <br />
                            <form className="form form-group" style={{ textAlign: "center", display: "inlineBlock" }}>
                                <form className="form">
                                    <br />
                                    <br />
                                    <input
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="username"
                                        className="form-control-lg"
                                        style={{ width: "90%" }}
                                    />
                                    <br />
                                    <br />
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="email"
                                        className="form-control-lg"
                                        style={{ width: "90%" }}
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
                                        style={{ width: "90%" }}
                                    />
                                    <br />
                                    <br />
                                    <button
                                        onClick={this.handleFormSubmit}
                                        className="btn btn-success"
                                        style={{ width: "50%" }}
                                    >
                                        Sign-Up</button>
                                </form>
                            </form>
                            <br />
                            <p>Already a member? Login <a href="/">here</a></p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;