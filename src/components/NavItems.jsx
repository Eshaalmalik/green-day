import React from 'react';
import { navItems } from '../../GDItems';

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        {navItems.map((nitem) => {
          return <li>{nitem.nav_item}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavItems;
