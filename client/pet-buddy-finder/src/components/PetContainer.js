import React, { Component } from "react";
import PetDetail from "./PetDetail";
import axios from "axios";

class PetContainer extends Component {
    state = {
      results: [],
      search: ""
    };
  
    // When this component mounts
    componentDidMount() {
      //generate token from Postman
      const token="";

      //localhost is 3000 by default
      axios.defaults.baseURL = "http://localhost:9000/";

      
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
      axios.get("https://api.petfinder.com/v2/animals")
      .then(res => { 
        console.log(res)
        const results = res.data.animals;
        this.setState({ results});
      })
      .catch(err => console.log(err));
    }

      render() {
          return (
              <div>
                   {this.state.results.map(result => (
                   <PetDetail
                   id={result.id}
                   name={result.name}
                   src={result.photos}
                   status={result.status}
                   description={result.description}
                   gender={result.gender}
                   image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"}
                   />
                   ))}
              </div>
          )
      }

};

export default PetContainer;