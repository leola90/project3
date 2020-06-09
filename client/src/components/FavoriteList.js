import React from "react";
 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function FavoriteList(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card >
              <Card.Img alt={props.name} style={{ width: "100%" }} src={props.image} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>{props.description}</Card.Text> */}
                <Card.Text>Gender: {props.gender}</Card.Text>
                <Card.Text>Status: {props.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default FavoriteList;
