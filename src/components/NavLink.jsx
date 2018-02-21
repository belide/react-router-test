import React from 'react';
import { Link } from 'react-router-dom';
 
const NavLink = () => {
  return (
    <div className="nav">
      <Link to="/home">Home</Link> <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavLink;