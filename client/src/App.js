import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Member" component={Member} />
        <Route exact path="/Register" component={Register} />  
      </Switch>
      </Router> 
    </div>
  );

}

export default App;






