import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Logout extends Component {

    // LOG OUT FUNCTION 
    handleFormSubmit = event => {
        axios.get("/api/users/logout")
            .then(response => {
                console.log("i've been clicked")

                // window.localStorage.removeItem("isAuthenticated", isAuthenticated);
                window.localStorage.clear();
                this.props.history.push("/login");
            })
            .catch(err => console.log(err));
    }

    render() {
        const isAuthenticated = window.localStorage.getItem("isAuthenticated");

        if (!isAuthenticated) {
            return <Redirect to="/login" />
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6" style={{ backgroundColor: "whitesmoke", padding: "3%" }} >
                            <div className="form form-group" style={{ textAlign: "center", display: "inlineBlock" }}>
                                <h1 style={{ textAlign: "center" }}> Logout?</h1>
                                <button
                                    onClick={this.handleFormSubmit}
                                    className="btn btn-danger"
                                    style={{ width: "20%" }}
                                >
                                    Yes</button>
                                <br />
                                <p>Or go back <a href="/PetsOfTheDay">here</a></p>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>


            </div>
        )
    }
};

export default Logout;