import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  constructor(){
    super();
    this.state = {
        ready: false,
        where: {lat:null, lng:null},
        error: null
    }
}
componentDidMount(){
    let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 10,
        maximumAge: 60 * 60 * 24
    };
    this.setState({ready:false, error: null });
    navigator.geolocation.getCurrentPosition( this.geoSuccess, this.geoFailure, geoOptions);
}
geoSuccess = (position) => {
    console.log(position);
    
    this.setState({
        ready:true,
        where: {lat: position.coords.latitude,lng:position.coords.longitude }
    })
}
geoFailure = (err) => {
    this.setState({error: err.message});
}

  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 11
  };

  render() {
    
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAkKwg820hYfSV54pK4oI_xDk5OARvZLO4" }}
          defaultCenter={this.state.where}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.state.where.lat}
            lng={this.state.where.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;



