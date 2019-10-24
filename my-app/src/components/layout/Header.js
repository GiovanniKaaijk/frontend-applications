import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div>
                <h1>Nationaal Museum Van Wereldculturen</h1>
                <Link to="/">Home</Link>  <Link to="/overview">Overview</Link>
            </div>
        </header>
    )
}
