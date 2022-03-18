//rfce [Enter] to create below template
import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img 
                className="nav__avatar"
                src="http://pm1.narvii.com/6378/ad261bfa56b70f6e8cbf0930892817e1d37e00b7_00.jpg"
                alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav;
