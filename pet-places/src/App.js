import React, { useState, useEffect } from "react";
import Map from "./components/Map"
import Places from "./components/Places"


const App = () =>{
  // const [latitude, setLatitude]=useState({lat: 0})
  // const [longitude, setLongitude]=useState({lng: 0})

  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(position=>{
  //     setLatitude({
  //       lat: position.coords.latitude })
  //   })
  // },[])

  
  // useEffect(()=>{
  //   navigator.geolocation.getCurrentPosition(position=>{
  //     setLongitude({
  //       long: position.coords.longitude })
  //   })
  // },[])

    return (
      <div style={{ width: 400, height: 600, background: "lightBlue" }}>
        < Map  />
        < Places />
     
      </div>
    )
  }


export default App




