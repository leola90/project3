import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function PetDetail(props) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt={props.name} src={props.image}  />  
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
        <ListGroupItem>ID: {props.id}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default PetDetail;



