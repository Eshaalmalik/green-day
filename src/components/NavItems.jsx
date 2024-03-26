import React from 'react';
import { navItems } from '../../GDItems';

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        {navItems.map(({ nav_item, id }) => {
          return <li key={id}>{nav_item}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavItems;
