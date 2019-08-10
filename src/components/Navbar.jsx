import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <div>
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="/skatepark">
      Skateparks
    </Link>
  </div>
);

export default Navbar;
