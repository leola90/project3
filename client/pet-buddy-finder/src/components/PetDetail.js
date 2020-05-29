import React from "react";

function PetDetail(props) {
    return (
      <div className="text-center">
        <img alt={props.name} className="img-fluid" src={props.image} style={{ margin: "0 auto", width: "100px" }} />
        <h3>ID: {props.id}</h3>
        <h3>Status: {props.status}</h3>
        <h3>Description: {props.description}</h3>
        <h3>Gender: {props.gender}</h3>
      </div>
    );
  }
  
  export default PetDetail;