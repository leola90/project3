import React, { Component } from "react";
import FavoriteList from "./FavoriteList";
import axios from "axios";
// import  {Redirect} from "react-router-dom";

class FavoriteContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        axios.get("/api/posts")
            .then(res => {
                console.log(res);
                const results = res.data;
                console.log(results)
                this.setState({ results })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.results.map(result => (
                    <FavoriteList
                        id={result.id}
                        key={result.id}
                        name={result.name}
                        src={result.photos}
                        status={result.status}
                        gender={result.gender}
                        link={result.url}
                        image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/" + result.id + "/1/?"}
                    />
                ))}
            </div>
        )
    }
}
export default FavoriteContainer;