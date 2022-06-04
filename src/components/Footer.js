import React from 'react'; 
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
  
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h5 className='footer-subscription-heading'>
          For More Information Read Below.
        </h5>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/howitworks'>How it works</Link>
            <Link to='/about'>Developer</Link>
          </div>
          <div class='footer-link-items about'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact Form</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items media'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/https://www.facebook.com/happyheroboy.hhb/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            P<i class="fas fa-desktop"></i>C
            </Link>
          </div>
          <small class='website-rights'>Guled Ali <i class="far fa-copyright"></i> 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/happyheroboy.hhb/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
