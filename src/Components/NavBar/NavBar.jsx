import React from 'react'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function NavBar() {
    return (
        <nav className="nav">
            <Link to='/' className='site-title'>Parker C. Wilson</Link>
            <ul>
                <CustomLink to='/books'>Books</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/events'>Events</CustomLink>
            </ul>
        </nav>
       
       
    );
}

function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

