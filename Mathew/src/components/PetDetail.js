import React from "react";
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';

function PetDetail(props) {
  return (
    // <div className="text-center">
    //   < alt={props.name} className="img-fluid" src={props.image} style={{ margin: "0 auto", width: "100px" }} />
    //   <h3>ID: {props.id}</h3>img
    //   <h3>Status: {props.status}</h3>
    //   <h3>Description: {props.description}</h3>
    //   <h3>Gender: {props.gender}</h3>
    // </div>

    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card style={{ margin: "0 auto", width: "350px" }}
          closeIcon={<Icon>cancel</Icon>}
          header={<CardTitle image={props.image} style={{ margin: "0 auto", width: "250px" }} reveal waves="light" />}
          reveal={<p>{props.description}</p>}
          revealIcon={<Icon></Icon>}
          title={"Status: " + props.status.charAt(0).toUpperCase() + props.status.slice(1)}
        >

          <p>ID: {props.id}</p>
          <p>Gender: {props.gender}</p>

        </Card>
      </Col>
    </Row>



  );
}

export default PetDetail;

