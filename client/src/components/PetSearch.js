import React, { Component } from 'react';
import PetDetail from "./PetDetail";
import axios from "axios";


class PetSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      search: ""
    };
    // console.log("This is my initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    //    title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
    //   {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
    //    title: "	The Avengers", overview: "This is my second overview"},
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}
  }

  performSearch(searchTerm) {
    // console.log("Perform search using moviedb")
    // const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    // $.ajax({
    //   url: urlString,
    //   success: (searchResults) => {
    //     console.log("Fetched data successfully")
    //     console.log(searchResults)
    //     const results = searchResults.results
    //     // console.log(results[0])

    //     var movieRows = []

    //     results.forEach((movie) => {
    //       movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
    //       // console.log(movie.poster_path)
    //       const movieRow = <MovieRow key={movie.id} movie={movie}/>
    //       movieRows.push(movieRow)
    //     })

    //     this.setState({rows: movieRows})
    //   },
    //   error: (xhr, status, err) => {
    //     console.error("Failed to fetch data")
    //   }
    // })
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
      axios.get("https://api.petfinder.com/v2/animals?type=" + searchTerm + "&photos!=Array[0]&limit=100")
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
      axios.get("https://api.petfinder.com/v2/animals?location=" + searchTerm)
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

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                {/* <img alt="app icon" width="50" src="green_app_icon.svg"/> */}
              </td>
              <td width="8" />
              <td>
                <h1>Pet Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Animal Type" />

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler1.bind(this)} placeholder="Animal Location by Zip Code" />

        {/* {this.state.rows} */}
        <div class="columns">
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
      </div>
    );
  }
}

export default PetSearch;