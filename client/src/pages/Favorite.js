import React, { Component } from "react";
import FavoriteContainer from "../components/FavoriteContainer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import { Link} from "react-router-dom";

class Favorite extends Component {

    render() {
        return (
            <div>
                 <Navbar bg="warning" expand="lg">
                    <Navbar.Brand href="#home">Pet Buddy Finder</Navbar.Brand>
                    <Nav.Link href="#logout">Logout</Nav.Link>
                    <Link to="/member">Member</Link>
                </Navbar>
                <Container>
                    <FavoriteContainer />

                </Container>
                
            </div>
        );
    }
}

export default Favorite;