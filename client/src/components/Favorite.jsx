import React, { Component } from "react";
import FavoriteContainer from "./FavoriteContainer";
import axios from "axios";
import NavBar from "./NavBar"
import DogIcon from "../assets/dog-icon.png";
import  {Redirect} from "react-router-dom";

class Favorite extends Component {
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
            this.getData();
        })
        .catch(err => console.log(err))
    }

    deleteButton = id => {
        console.log(id);
        axios.delete("/api/posts/"+ id) 
        .then(res => {
            if(res.data != null) {
                this.setState({
                    results: this.state.results.filter(result => result.id !== id)
                })
            }
            this.componentDidMount();
        })
        .catch(err => console.log(err));
        
    }

    render() {
        const isAuthenticated = window.localStorage.getItem("isAuthenticated");

        if (!isAuthenticated) {
            return <Redirect to = "/login" />
        };

        return(
            <div>
            <NavBar/>
            {this.state.results.map(result => (
                    <FavoriteContainer
                        id={result._id}
                        // key={result.id}
                        name={result.name}
                        description={result.description}
                        src={result.photos}
                        status={result.status}
                        gender={result.gender}
                        link={result.url}
                        image={result.image}
                        deleteButton={this.deleteButton}
                        
                    />
                ))}
            </div>
        );
    }
  
}

export default Favorite;