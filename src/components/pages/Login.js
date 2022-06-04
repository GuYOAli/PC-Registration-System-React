import React from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi-browser";
import { Toast } from 'react-toastify';
import Form from "../../StudentData/form";
import './Login.css';
import _ from "lodash";



class LoginForm extends Form {
  
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  handleSubmit = e =>{
    e.preventDefault();
    this.doSubmit();
  };

  handleChange = e =>{
    const account = {...this.state.account};
    account.username = e.currentTarget.value;
    account.password = e.currentTarget.value;
    this.setState({account})
  };

  doSubmit = () => {
    // Call the server
    this.props.history.push("./admin");
    
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input value={this.state.account.username} 
            onChange={this.handleChange} 
            id="username" type="text"></input>
          </div>

          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          value={this.state.account.password}
          onChange={this.handleChange} 
          id="password" 
          type="password" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
 }
}

export default LoginForm;