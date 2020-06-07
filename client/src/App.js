import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PetContainer from "./components/PetContainer";
import Places from "./components/Places"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <h1>This is the app page</h1>
        <PetContainer />
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Member" component={Member} />
        <Route exact path="/Places" component={Places} />
      </div>
    </Router>
  );
 
}

export default App;





  
