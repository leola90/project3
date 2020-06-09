import React, { Component } from "react";
import PetContainer from "../components/PetContainer";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import { Link} from "react-router-dom";
import axios from "axios";
// import  {Redirect} from "react-router-dom";

class Member extends Component {

    
    handleFormSubmit= event => {
        axios.get("/api/users/logout")
        .then(response => {
            console.log("i've been clicked")
        
            // window.localStorage.removeItem("isAuthenticated", isAuthenticated);
            window.localStorage.clear();
            this.props.history.push("./Login");
        })
        .catch(err => console.log(err));
        
    }

    render() {
        // const isAuthenticated = window.localStorage.getItem("isAuthenticated");

        // console.log(isAuthenticated);
        // if (isAuthenticated) {
        //     return <Redirect to = "/Login" />
        // };
        return (
            <div>
                <Navbar bg="warning" expand="lg">
                    <Navbar.Brand href="#home">Pet Buddy Finder</Navbar.Brand>
                    {/* <Nav.Link>Logout {this.handleFormSubmit}</Nav.Link> */}
                    <Link to="/favorite">Favorites</Link>
                    <button onClick={this.handleFormSubmit}>Logout</button>
                </Navbar>
                <Container>
                    <PetContainer />

                </Container>
                
            </div>
        );
    }
}

export default Member;