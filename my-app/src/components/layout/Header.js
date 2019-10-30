import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/wereldMuseum.png';
export default function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
                <Link to="/">Home</Link>  <Link to="/overview">Overview</Link>
            </div>
        </header>
    )
}
