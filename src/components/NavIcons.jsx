import React from 'react';
import { navbarIcons } from '../../GDItems';
import ShoppingCart from './ShoppingCart';
const NavIcons = ({ product }) => {
  return (
    <>
      <div className="navbar-icons">
        <li className="nav-icon">
          <ShoppingCart product={product} />
        </li>
        {navbarIcons.map((nitm) => {
          return (
            <li key={nitm.id} className="nav-icon">
              {nitm.nav_icon}
            </li>
          );
        })}
      </div>
    </>
  );
};

export default NavIcons;
