import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>NMVW</h1>
            <Link to="/">Home</Link> | <Link to="/overview">Overview</Link>
        </header>
    )
}
