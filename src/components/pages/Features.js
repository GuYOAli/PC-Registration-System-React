import React, { Component } from 'react'
import './Features.css';

class Features extends Component {

  render() { 
    return ( 
    <section className="features">
      <div className="container-for-features">
      <h1 className='head'>Features of the System</h1>

      <p className="Note"><span> Distributed System :-</span>
       The System will allow to use a connection and will be distributed into different places 
       and that will help to manage it more easily.And the Students doesn’t need to wait for
       the Admin or Staff. They will Register whenever they want and wherever they like. 
       </p>
      
      <p className="Note"><span> Storing and Searching by Image :-</span>
      The Current System doesn't allow the Admin/Staff to take a picture of the students
      and also it searches the students information by their ID number and this method 
      is done by textual search, but the next version will allow the Admin/Staff to take 
      a picture of the students and store it into the Database. In other hand  
      the system will allow to scann the serial number of labtops. 
      And this will make the job easier for the security staffs. 
      </p>

      <p className="Note"><span> Mobile App :-</span>
       In the feature the System will have a cross platform mobile application built by 
       React-Native, as you know this System is built by React, so in the feature it will 
       be easier than you think the Admin and Staffs can do their jobs by using the 
       mobile app even they can install it into their own devices as much as they have 
       an account and, the System is distributed system.
      </p>

      <p className="Note"><span> Recently Searched Laptops :-</span>
      The system will support to store and display last searched students, 
      that means the time they are going to outside of the university and the time they are 
      entering will be stored to database and will be seen by the Admin and the Staffs.
      </p>

      <p className="Note"><span> Number of PCS :-</span>
      The system will support to store more than one PC. The System is limited to store only two PCs for each students, 
      in the feature it will be two PCs.
      </p>
     
      </div>
   </section>
 );
  }
}
 
export default Features;