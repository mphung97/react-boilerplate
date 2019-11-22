import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1 } from './layout.scss';

const Layout = ({ children }) => {
  return (
    <div >
      <Link to="/">
        <div as="h1" className={h1}>
          webpack-for-react
        </div>
      </Link>
      {children}
      <span />
      <p className={pullRight}>
        {`Made with <3 by Esau Silva`}
      </p>
    </div>
  );
};

export default Layout;
