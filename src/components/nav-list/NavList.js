import React from "react";
import { Link } from "react-router-dom";
const NavList = () => {
  return (
    <div className="desktop-list mobile-list">
      <Link to="/">Home</Link>
      <Link to="/property">Properties</Link>
      {/* hard coded nums for dev */}
      <Link to="/listing/2">Agents</Link>
      <a href="/#">Blog</a>
      <a href="/#">Features</a>
      <a href="/#">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="/#">
        <i className="fab fa-pinterest-p" />
      </a>
      <a href="/#">
        <i className="fab fa-twitter" />
      </a>
      <a href="/#">
        <i className="fab fa-instagram" />
      </a>
    </div>
  );
};

export default NavList;
