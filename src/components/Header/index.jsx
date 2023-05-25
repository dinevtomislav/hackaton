import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none'});

export default function Header () {
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/shows" style={styles}>Pokemon</NavLink>
                    <NavLink to="/search" style={styles}>Search Pokemon</NavLink>
                </nav>
            </header>
            <Outlet />
        </main>
    )
};
