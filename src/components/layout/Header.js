import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <span style={checkMark}>✔️</span>
            <h1 style={headerTitle}>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About </Link>
        </header>
    )
}

const headerStyle = {
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const headerTitle = {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Black'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '400'
}

const checkMark = {
    fontSize: '3rem'
}

export default Header
