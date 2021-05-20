import React from 'react';
import logoSVG from '../assets/img/logo.svg';
import '../scss/components/_header.scss';



function Header () {
    return (
        <div className="header">
            <div className="container">
                    <div className="header-logo">
                        <img fill="gold"width="50" src={logoSVG} alt="Logo" />
                        <div className="header-text">
                            <h1> Github user search.</h1>
                        </div>
                    </div>

            </div>
        </div>
    );
}



export default Header;