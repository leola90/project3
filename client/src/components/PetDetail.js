import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function PetDetail(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col> 
          <button onClick={props.likeButton} className="btn btn-success">Like</button>
          </Col>
          <Col>
            <Card >
              <Card.Img alt={props.name} style={{ width: "100%" }} src={props.image} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>{props.description}</Card.Text> */}
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>Status: {props.status}</Card.Text>
                <Card.Text>ID: {props.id}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          {/* <button onClick={props.likeButton} className="btn btn-danger">Dislike</button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PetDetail;
