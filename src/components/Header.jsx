import React from 'react';

import NavItems from './NavItems';
import NavIcons from './NavIcons';

function Header() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <NavItems />
      <NavIcons />
    </div>
  );
}

export default Header;
