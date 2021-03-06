import React from 'react';
import {
  Link
} from "react-router-dom";

function Menu() {
  return (
    <div className="menu"
        role="navigation"
        aria-label="Main Menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
    >

        <ul>
            <li><Link itemProp="url" to="">Home</Link></li>
            <li><Link itemProp="url" to="Budget">My Budget</Link></li>           
            <li><Link itemProp="url" to="about">About</Link></li>
            <li><Link itemProp="url" to="logout">Logout</Link></li>
            <li><Link itemProp="skip-to-content-link" href="#main">Skip to Content</Link></li>
        </ul>
    </div>
  );
}

export default Menu;
