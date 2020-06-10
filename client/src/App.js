import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Member from "./pages/Member";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import PetSearch from "./components/PetSearch";
import Places from "./components/Places"
import AnimalsFact from "./components/AnimalsFact"
import PetsOfTheDay from "./components/PetsOfTheDay"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
    
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/PetSearch" component={PetSearch} />
        <Route exact path="/PetsOfTheDay" component={PetsOfTheDay} />
        <Route exact path="/Places" component={Places} />
        <Route exact path="/Facts" component={AnimalsFact} />
   
      </div>
  
    </Router>
  );
 
}

export default App;




  
