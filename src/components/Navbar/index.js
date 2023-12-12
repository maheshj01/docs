// create a transparent Navbar component

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = (props) => {
    const title = 'Mahesh Jamdade'
    return (
        <>
            <nav className="navbar row">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"> {title} </Link>
                    < div className="dark-mode__toggle" onClick={props.toggleMode}>
                        <div
                            className={props.darkMode ? 'toggle toggled' : 'toggle'}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;