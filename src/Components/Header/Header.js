import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css"


const Header = () => {
  return (
    <header className="Header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/welcome">Welcome</Link>
        <Link to="/users">Users</Link>
        <Link to="/TodoList">TodoList</Link>
      </nav>
    </header>
  );
};

export default Header;
