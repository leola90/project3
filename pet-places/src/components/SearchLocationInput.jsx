import React, { useState, useEffect, useRef } from "react";
import "../assets/AutoCompleteText.css"

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function SearchLocationInput(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  console.log(props)
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyAkKwg820hYfSV54pK4oI_xDk5OARvZLO4&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const city = addressObject.address_components[0].long_name;
    const query = addressObject.formatted_address;
    updateQuery(query);
    props.setStateNear(city)
  }

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address", "geometry.location.lat"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery),

    );
  }

  var divStyle = {
    marginTop: "1vh",
    marginBottom: "3vh",
    marginLeft: "30px",
    
  };
  return (
    <div style={divStyle} className="search-location-input autoCompleteText">
      <input
        type={props.type}
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder={props.placeholder}
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;