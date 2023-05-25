import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#1746A2'
};

export default function HomePage() {
    return (
        <>
            <h1>Top Pokemon</h1>
            <em>All about the greatest of them all</em>
            <ul>
                <li><Link to="/shows" style={linkStyle}>Explore Pokemon</Link></li>
                <li><Link to="/search" style={linkStyle}>Search for your favorite Pokemon</Link></li>
            </ul>
        </>
    )
};
