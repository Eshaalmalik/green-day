import React from 'react';

import NavItems from './NavItems';
import NavIcons from './NavIcons';

function Header({ product }) {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <NavItems />
      <NavIcons product={product} />
    </div>
  );
}

export default Header;
