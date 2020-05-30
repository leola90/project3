import React, { Component } from "react"
import "../assets/places.css"
import axios from "axios"

class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: [],
            currentLatitude: null,
            currentLongitude: null,
            name: "Pet Store"
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        if(prevState.name !== this.state.name) {
            this.getVenues()
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation not supported by this browser")
        }
    }

    getCoordinates = (position) => {
        this.setState({
            currentLatitude: position.coords.latitude,
            currentLongitude: position.coords.longitude
        })
        this.getVenues()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAkKwg820hYfSV54pK4oI_xDk5OARvZLO4&callback=initMap")
        window.initMap = this.initMap
    }

    getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        console.log(this.state.currentLatitude, this.state.currentLongitude)
        const parameters = {
            client_id: "2CRZZD5FOPN5H2MVPJ0QVKDZAEB2MR2GBCNVMPZYYGLDIWQ4",
            client_secret: "QPBZMCQRUFUXARBB131TS12OXAEP4K1PFKUIBXJO0IS13ZEN",
            query: this.state.name,
            ll: (`${this.state.currentLatitude},${this.state.currentLongitude}`),
            v: "20200528"
        }

        axios.get(endPoint + new URLSearchParams(parameters))
            .then(response => {
                this.setState({
                    venues: response.data.response.groups[0].items
                }, this.renderMap())
                console.log(response.data.response.groups[0].items)
            })
            .catch(error => {
                console.log("error: " + error)
            })
    }

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: this.state.currentLatitude, lng: this.state.currentLongitude },
            zoom: 12
        });

        var infowindow = new window.google.maps.InfoWindow();

        this.state.venues.map(place => {

            var contentString = `${place.venue.name} <br /> ${place.venue.location.address}`;

            var marker = new window.google.maps.Marker({
                position: { lat: place.venue.location.lat, lng: place.venue.location.lng },
                map: map,
                title: place.venue.name,
                adress: place.venue.categories.name
            });

            marker.addListener('click', function () {
                infowindow.setContent(contentString)
                infowindow.open(map, marker);
            });
        })
    }

    handleDropDownChange = name => {
        console.log(name);
        // const { name, value } = event.target;
        this.setState({
          name: name
        });
        console.log(name)
        // this.getVenues()
      };

    render() {
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Find Your Pet Place: {this.state.name}</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Pet Store")} >Pet Store</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Animal Shelter")} >Animal Shelter</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Pet Service")} >Pet Service</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Pet Café")} >Pet Café</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Dog Run")} >Dog Run</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Veterinarian")} >Veterinarian</li>
                        <li className="dropdown-item" cursor="pointer" onClick={() => this.handleDropDownChange("Park")} >Park</li>
                    </ul>
                    <div><br /></div>
                </div>
                <div id="map"></div>
            </div>
        )
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default Places;