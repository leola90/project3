import React, { Component } from "react";
import PetContainer from "./PetContainer";
import axios from "axios";
import NavBar from "./NavBar"
import DogIcon from "../assets/dog-icon.png"
import { Redirect } from "react-router-dom"

class PetsOfTheDay extends Component {
  state = {
    results: []
  };
  // When this component mounts
  componentDidMount() {
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
      console.log('token', data);
      console.log(data.access_token)
      const token = data.access_token;
      //localhost is 3000 by default
      // axios.defaults.baseURL = "http://localhost:3000/";
      // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
      axios.get("https://api.petfinder.com/v2/animals", { headers:{'Authorization': `Bearer ${token}`} })
        .then(res => {
          console.log(res)
          const results = res.data.animals;
          // this.setState({ results }); //changed this reference
          currentComponent.setState({
            results
          })
        })
        .catch(err => console.log(err));
    }).catch(function (err) {
      console.log('something went wrong', err);
    });
  }

  likeButton(result) {
    const payload = {
      name: result.name,
      description: result.description,
      gender: result.gender,
      status: result.status,
      image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"
    }

    //console.log(payload);

    axios({
      url: "/api/posts",
      method: "POST",
      data: payload
    })
      .then(res => {
        console.log(res);
      })

  };

  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Redirect to="/login" />
    };
    return (
      <div>
        <NavBar />
        {this.state.results.map(result => (
          <PetContainer
            id={result.id}
            name={result.name}
            src={ result.images? result.images: DogIcon }
            status={result.status}
            description={result.description}
            gender={result.gender}
            link={result.url}
            image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"}
          />
        ))}
      </div>
    )
  }
};
export default PetsOfTheDay;