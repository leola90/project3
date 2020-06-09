import React from 'react';
import NavBar from "./NavBar"
import "../assets/AnimalsFact.css"
// import "../assets/AutoCompleteText.css"

var animalsArray = [

  "Labrador Retriever",
  "German Shepherd",
  "Bulldog",
  "Golden Retriever",
  "Beagle",
  "Poodle",
  "French Bulldog",
  "Rottweiler",
  "Yorkshire Terrier",
  "Maine Coon",
  "British Shorthair",
  "Ragdoll",
  "Persian cat",
  "Siamese cat",
  "American Shorthair",
  "Sphynx cat",
  "American Bobtail",
  "Exotic Shorthair Cats",
  "rabbit",
  "goldfish",
  "Dog Breeds"

];

var randomItems = animalsArray[Math.floor(Math.random() * animalsArray.length)];
console.log(randomItems);




class AnimalsFact extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      searchReturnValues: [],
      searchTerm: randomItems
    }
    console.log('contructor run')
  }

  // Mount random animals to search when page load

  componentDidMount() {
    this.useSearchEngine();

  }

  // Middle function to handle preventdefault separate

  handleSearchButton = (event) => {
    event.preventDefault();
    this.useSearchEngine();

  }


  // Search Wiki for fact 

  useSearchEngine = () => {

    console.log('search engine run')

    this.setState({
      searchReturnValues: [],

    })

    const pointerToThis = this

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      list: "search",
      srsearch: this.state.searchTerm,
      format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {

      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (response) {
          console.log(response.query.search[0].pageid)
          console.log(response.query.search)

          for (var key in response.query.search) {

            pointerToThis.state.searchReturnValues.push({
              queryResultPageFullURL: 'no link',
              queryResultPageID: response.query.search[key].pageid,
              queryResultPageTitle: response.query.search[key].title,
              queryResultPageSnippet: response.query.search[key].snippet,
            });
          }
        }
      )
      .then(
        function (response) {
          for (var key2 in pointerToThis.state.searchReturnValues) {
            // console.log(pointerToThis.state.searchReturnValues)
            let page = pointerToThis.state.searchReturnValues[key2];
            let pageID = page.queryResultPageID;
            let urlForRetrievingPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

            fetch(urlForRetrievingPageID)
              .then(
                function (response) {
                  return response.json();

                }
              )
              .then(
                function (response) {
                  page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

                  pointerToThis.forceUpdate();
                }
              )

          }
        }
      )

  }

  changeSearchTerms = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    console.log('render run')

    let searchResults = [];
    for (var key3 in this.state.searchReturnValues) {
      searchResults.push(
        <div style={{
          marginLeft: "2vw",
          marginRight: "2vw",
        }}>
          <br />
          <div
            className="searchResultDiv"
            key={key3}
            style={{
              padding: "5%",
              backgroundColor: "whitesmoke"
            }}
          >
            <h3>
              <a
                href={this.state.searchReturnValues[key3].queryResultPageFullURL}
                target="blank">
                {this.state.searchReturnValues[key3].queryResultPageTitle}
                
              </a>
            </h3>
               {/* <span className='link'>
              <a href={this.state.searchReturnValues[key3].queryResultPageFullURL}>
                {this.state.searchReturnValues[key3].queryResultPageFullURL}
              </a>
            </span> */}
            <br />
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: this.state.searchReturnValues[key3].queryResultPageSnippet }}>
            </p>
            <br />
          </div>
        </div>

      )

    }

    var divStyle = {
      marginTop: "1vh",
      marginBottom: "3vh",
      marginLeft: "30px",
      width: "80%"

    };

    return (


      <div className="App">
        <NavBar />
        <div><br/>  </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 style={{ textAlign: "center" }}> Search anything about pets!</h1>
            <div> <br /> </div>
            <form action="">
              <input
                type="text"
                value={this.state.searchTerm || ''}
                id="btn"
                onChange={this.changeSearchTerms}
                className="animalFacts"
                style={divStyle}
              >
              </input>

              <button
                type="submit"
                onClick={this.handleSearchButton}
              >Search
          </button>
            </form>
            <div>
              {searchResults}
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    );
  }
}

export default AnimalsFact;