import React, { Component} from "react";



class Register extends Component {

    state = {
      name: "",
      email: "",
      password: "",
      errors: ""
    }
  

  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      this.setState({
        Name: "",
        Email: "",
        Password: ""
      });
    };

    render() {
         
        return(
         <div>
           
          <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          </form>
         </div>
        );
    }
}

export default Register; 
