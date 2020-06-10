import React from "react";
// import { Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize';
import "../assets/PetDetail.css";
import cat from "../assets/icon/cat.png"
import dog from "../assets/icon/dog.png"
import bird from "../assets/icon/bird.png"
import horse from "../assets/icon/horse.png"
import rabbit from "../assets/icon/rabbit.png"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import DogIcon from "../assets/dog-icon.png"

function PetDetail(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Card ClassName="cardWidth">
                        <Card.Img variant="top" alt={props.name} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=DogIcon}} />
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <div style={{ textAlign: "Center" }} >
                                {(props.type === "Cat") ? <img src={cat} /> : (props.type === "Dog") ? <img src={dog} /> : (props.type === "Bird") ? <img src={bird} /> : (props.type === "Horse") ? <img src={horse} /> : (props.type === "Rabbit") ? <img src={rabbit} /> : "Miscellaneous"}
                                <br />
                                <span style={{ fontSize: "16px", fontWeight: "bold" }}>Primary Breed: {props.breeds.primary}</span>
                                <br />
                                <span style={{ marginLeft: "15px", fontSize: "16px", fontWeight: "bold" }}>Mixed Breed: {(props.breeds.mixed === false) ? "No" : "Yes"}</span>
                            </div>
                            <Card.Title><h3>Description</h3></Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Gender: {props.gender}</ListGroupItem>
                            <ListGroupItem>Status: {props.status}</ListGroupItem>
                            {/* <ListGroupItem>ID: {props.id}</ListGroupItem> */}
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Like</Card.Link>
                            <Card.Link href="#">Delete</Card.Link>
                        </Card.Body>
                    </Card>
                    <div><br /><br /></div>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>

    );
}

export default PetDetail;