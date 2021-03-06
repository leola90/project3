import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import "../assets/PetDetail.css"
import DogIcon from "../assets/dog-icon.png"
function PetContainer(props) {
  return (
    <div>
      <div className="row">
       <div className="col-md-3"></div>
       <div className="col-md-6">
         {/* <div>
            <img src={props.image} onError/>
            </div> */}
    <Card className="cardWidth">
      <Card.Img variant="top" alt={props.name} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=DogIcon}} />  
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.description}
    </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Gender: {props.gender}</ListGroupItem>
        <ListGroupItem>Status: {props.status}</ListGroupItem>
        <ListGroupItem>Link: {props.link}</ListGroupItem>
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
export default PetContainer;