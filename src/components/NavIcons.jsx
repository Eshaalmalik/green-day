import React from 'react';
import { navbarIcons } from '../../GDItems';
const NavIcons = () => {
  return (
    <>
      <div className="navbar-icons">
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
