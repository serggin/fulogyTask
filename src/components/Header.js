import React from 'react';
import {inject, observer} from'mobx-react';

import logo from '../assets/images/logo.jpg';

const MenuButton = inject("store")(
  observer(({store}) => {
    const {showRightMenu, toggleMenuButton} = store;
    return (
      <div className="menu-button" onClick={toggleMenuButton}>
        {showRightMenu ? "\u2715" : "\u2630"}
      </div>
    );
  })
);

const BasketButton = () => (
  <div className="menu-button">
    {"\u{1F6D2}"}
    <div className="basket-circle" />
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <div className="header-buttons">
        <BasketButton />
        <MenuButton />
      </div>
    </div>
  );
}

export default Header;
