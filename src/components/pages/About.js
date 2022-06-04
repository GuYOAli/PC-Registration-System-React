import React, { Component } from 'react';
import CardItem from '../CardItem';
import { toast } from 'react-toastify';
import './About.css';

class About extends Component {
  me(){
    toast("Hello It's Me The Owner of The System");
  }
  render() { 
    return ( 
      <div className='cards'>
          <h1 className="About">About The Developer of The System!</h1>
          <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
              src='images/33.jpg'
              text="Hello, I'm Guled Ali Ibrahim and I'm the developer of The System."
              label='Guled Ali Ibrahim'
              />
            </ul>
        <div className="text">
          <p className="bio">Hello, I am a 4th Year Software Engineering Student. I am outgoing, dedicated, and open-minded.</p>
          <p className="bio">I get across to people and adjust to changes with ease.I believe that a person should work on</p>
          <p className="bio">developing their professional skills and learning new things all the time.</p>
        </div>
    </div>
  </div>
</div>
     );
  }
}
 
export default About;