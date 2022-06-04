import React, { Component } from 'react';
import Searchbox from '../Searchbox'
import Like from '../Likes';
import './StaffPage.css';

class Staff extends Component {
    state = {  }
    render() { 
        return (
            <section className="container"> 
            <h1>STAFF PAGE</h1>
            <Searchbox />
            <Like />
            </section>
         );    
         }
}
 
export default Staff;