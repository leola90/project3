import React, { Component } from "react";
import PetDetail from "./PetDetail";
import axios from "axios";
import API from "../utils/API";


class PetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
  }

  // When this component mounts
  componentDidMount() {
    this.getData();

  }

  getData() {
    let currentComponent = this;
    var key = 'igsm09LNIk7zw9Jus9SCp442VlrhlrCKzISwqh2q4jjMsgowpt';
    var secret = '4jDSTVvRCNOvwP7gMGgr85a6FQzFl9XeBJ2sKBmJ';
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      // console.log('token', data);
      // console.log(data.access_token)
      const token = data.access_token;
      //localhost is 3000 by default
      axios.defaults.baseURL = "http://localhost:5000/";
      axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
      // axios.get("https://api.petfinder.com/v2/animals")
      API.getfunction()
        .then(res => {
          console.log(res)
          const results = res.data.animals;
          currentComponent.setState({ results })
        })
        .catch(err => console.log(err));
    }).catch(function (err) {
      console.log('something went wrong', err);
    });
  };


  likeButton(result) {
    console.log(result);
    console.log("first checkpoint");
    const data = {
      name: result.name,
      gender: result.gender,
      status: result.status,
      image: result.image
    }
    console.log(data)
    API.savePost({
      name: result.name
    })
      .then(result => {
        console.log("third checkpoint");
      })
      .catch(err => console.log(err));

    this.getData();
  };

  render() {
    return (
      <div>
        {this.state.results.map(result => (
          <PetDetail
            id={result.id}
            key={result.id}
            name={result.name}
            src={result.photos}
            status={result.status}
            description={result.description}
            gender={result.gender}
            link={result.url}
            image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"}
            likeButton={this.likeButton.bind(this, result)}
          />
        ))}
      </div>
    )
  }

};

export default PetContainer;