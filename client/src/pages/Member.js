import React, { Component } from "react";
// import PetDetail from "../components/PetDetail";
import PetContainer from "../components/PetContainer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';


class Member extends Component {

    render() {
        return (
            <div>
                <Navbar bg="warning" expand="lg">
                    <Navbar.Brand href="#home">Pet Buddy Finder</Navbar.Brand>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <h3>Hello Username</h3>
                </Navbar>
                <Container>
                    <PetContainer />

                </Container>
                
            </div>
        );
    }
}

export default Member;