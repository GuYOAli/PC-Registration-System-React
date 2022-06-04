import React, { Component } from 'react'
import './Features.css';


class Features extends Component {

  render() { 
    return ( 
    <section className="features">
      <div className="container-for-features">
      <h1 className='head'>The System's Work Flow</h1>

      <p className="Note"><span> Home Page :-</span>
       The System will display the home page to user.The user can have a look at it, and  
       if the user wants to get access to the system the has to click the GetStart button.
       </p>
      
      <p className="Note"><span> Conatct :-</span>
      If The user wants to contact with developer he/she can 
      select the contact link on the above (Navbar) or 
      below down the system there is contact link either of the two the user can use to get intuch. 
      </p>

      <p className="Note"><span> Features :-</span>
       The SYstem has a few features which will be builted on the next version of the system. 
       If the user want to know about the features he/she can read by thier own by click the link on the navbar.
      </p>
      </div>
   </section>
 );
  }
}
 
export default Features;