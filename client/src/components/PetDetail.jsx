import React from "react";
import { Row, Col, Card, Icon, CardTitle, Button } from 'react-materialize';
import "../assets/PetDetail.css";
import cat from "../assets/icon/cat.png"
import dog from "../assets/icon/dog.png"
import bird from "../assets/icon/bird.png"
import horse from "../assets/icon/horse.png"
import rabbit from "../assets/icon/rabbit.png"

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
          closeIcon={<Icon>arrow_drop_down_circle</Icon>}
          header={<div>
            <CardTitle image={props.image} style={{ margin: "0 auto", width: "250px", height: "250px" }} reveal waves="light">
            </CardTitle>
            <div>{(props.type === "Cat") ? <img src={cat}/> : (props.type === "Dog") ? <img src={dog}/> : (props.type === "Bird") ? <img src={bird}/> : (props.type === "Horse") ? <img src={horse}/> : (props.type === "Rabbit") ? <img src={rabbit}/> : "Miscellaneous"} 
                 <span style={{ marginLeft: "15px", fontSize: "16px", fontWeight: "bold"}}>{props.breeds.primary}</span>
                 <span style={{ marginLeft: "15px", fontSize: "16px", fontWeight: "bold"}}>Mixed: {(props.breeds.mixed === false) ? "False" : "True"}</span> 
            </div>
            <Button className={"btn-floating waves-effect waves-light red"} style={{ marginLeft: "304px" }}>
              {<Icon className="favoriteIcon">star_border</Icon>}
            </Button>
          </div>}
          reveal={<p><h6>Status: {props.status.charAt(0).toUpperCase() + props.status.slice(1)}</h6><br></br>{props.description}<br></br>{props.address}</p>}
          revealIcon={<Icon>all_out</Icon>}
          title={props.name}
        >
          <h5>Status: {props.status.charAt(0).toUpperCase() + props.status.slice(1)}</h5>
          <p>ID: {props.id}</p>
          <p>Gender: {props.gender}</p>
          <p>Age: {props.age}</p>
        </Card>
      </Col>
    </Row>



  );
}

export default PetDetail;

