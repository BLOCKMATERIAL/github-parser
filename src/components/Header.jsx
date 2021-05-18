import React from 'react';
import logoSVG from '../assets/img/github.svg';
import '../scss/components/_header.scss';



function Header () {
    return (
        <div className="header">
            <div className="container">
                    <div className="header__logo">
                        <img width="38" src={logoSVG} alt="Logo" />
                        <div>
                            <h1> Github user search.</h1>
                        </div>
                    </div>

            </div>
        </div>
    );
}



export default Header;