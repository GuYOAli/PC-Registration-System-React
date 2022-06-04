import React, { Component } from 'react';
import Select from 'react-select';
import './StaffSignUp.css';

class StaffSignUp extends Component {

    render() { 

      const role = [
        { value : "Admin", label : "ADMIN" },
        { value : "Staff", label : "STAFF" }
      ]

        return ( 
      <section className="contact-form">
        <div className="formcontainer">
          <form>
          <h2>Staff Registration Form</h2>
        <input
          required
          type="text"
          id="fname"
          name="fname"
          placeholder="Full Name.."
          pattern="[a-zA-Z]*"
        />

        <input
          required
          type="text"
          id="Id"
          name="Id"
          placeholder="ID"
          pattern="[0-9]*"
        />

        <input
        required
          type="text"
          id="uname"
          name="uname"
          placeholder="User Name"
        />

        <input
          required
          type="password"
          id="pass"
          name="pass"
          placeholder="Password"
        />

        <Select required placeholder="ROLE" options={role} />
        <input type="submit" value="Register"/>
      </form>
    </div>
    </section>
         );
    }
    
}
 
export default StaffSignUp;