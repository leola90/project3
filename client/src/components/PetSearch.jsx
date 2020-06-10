import React, { Component } from 'react';
import PetDetail from "./PetDetail";
import axios from "axios";
import NavBar from "../components/NavBar"
import "../assets/PetDetail.css"

class PetSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            search: ""
        };
    }

    performSearch(searchTerm) {

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
            axios.get("https://api.petfinder.com/v2/animals?type=" + searchTerm + "&limit=100", { headers:{'Authorization': `Bearer ${token}`} })
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

    performSearch1(searchTerm) {
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
            axios.defaults.baseURL = "http://localhost:3000/";
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
            axios.get("https://api.petfinder.com/v2/animals?location=" + searchTerm + "&limit=100")
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

    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }

    searchChangeHandler1(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch1(searchTerm)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <br />
                        <div style={{ textAlign: "center" }}>
                            <h1>Search For Your Future Pet Now!</h1>
                        </div>
                        <br />
                        <input

                            style={{
                                fontSize: 24,
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "14px",
                                width: "99%",
                            }}
                            onChange={this.searchChangeHandler.bind(this)} placeholder="Search for a Cat, Dog, Bird, Rabbit or Horse..."
                            className="input petDetailInput"
                        />
                        <br />
                        <br />
                        <input
                            style={{
                                fontSize: 24,
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "14px",
                                width: "99%",
                            }}
                            onChange={this.searchChangeHandler1.bind(this)} placeholder="Animal Location by Zip Code..."
                            className="input petDetailInput"
                        />

                    </div>
                    <div className="col-md-3"></div>
                </div>
                {/* {this.state.rows} */}
                <div class="columns">
                    <br />
                    {this.state.results.map(result => (
                        <PetDetail
                            id={result.id}
                            name={result.name}
                            src={result.photos}
                            status={result.status}
                            description={result.description}
                            gender={result.gender}
                            type={result.type}
                            age={result.age}
                            breeds={result.breeds}
                            image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"}
                        // // trying to render multiple images - not working, reverting to previous
                        // image={result.photos.map(result => ( console.log(result.medium)))}

                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default PetSearch;