import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PetSearch from "./components/PetSearch";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <h1>This is the app page</h1>
        {/* <PetContainer /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Member" component={Member} />
        <Route exact path="/PetSearch" component={PetSearch} />
      </div>
    </Router>
  );
 
}

export default App;
// =======
// import Places from "./components/Places"

// const App = () => {

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "600px"
//       }}>

//       < Places />
//     </div>
//   )
// }

// export default App




  
