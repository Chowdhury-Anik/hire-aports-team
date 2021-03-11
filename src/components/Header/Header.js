import React from 'react';
import './Header.css';



const Header = (props) => {
    const sport = props.sport;
    const logo = props.logo;
    return (
        <div>
            <div>
            </div>
            <div className="centered" >
                {
                    window.location.pathname === '/' ? sport : <img className="headerLogo" src={logo} alt="" />
                }

            </div>
        </div>
    );
};

export default Header;