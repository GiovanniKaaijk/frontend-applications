import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/wereldMuseum.png';
export default function Header() {
    return (
        <header>
            <div>
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/">Home</Link>  <Link to="/overview">Overview</Link>
            </div>
        </header>
    )
}
