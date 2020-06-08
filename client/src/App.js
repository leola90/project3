import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Member from "./pages/Member";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import PetContainer from "./components/PetContainer";
import Places from "./components/Places"
import AnimalsFact from "./components/AnimalsFact"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
    
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Member" component={PetContainer} />
        <Route exact path="/Places" component={Places} />
        <Route exact path="/Facts" component={AnimalsFact} />
   
      </div>
  
    </Router>
  );
 
}

export default App;





  
