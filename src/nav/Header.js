import React  from 'react';
import mainLogo from '../images/logo.svg';
import enV from '../images/envelope.svg';
import '../nav/header.css'

function Header() {
    return (
        <header>
        <div className="container">
            <div className="logo_email">
                <div className="logo"><a href="./index.html"><img src={mainLogo} alt="Logo" /> </a></div>
                <a className="mailto" href="mailto:kroshan.kc@gmail.com"><img src={enV} />kroshan.kc@gmail.com</a>
            </div>
        </div>
        
            </header>
    );
  }
  export default Header;