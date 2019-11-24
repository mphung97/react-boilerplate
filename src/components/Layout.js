import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1, asdhashas, asdhashas1, asdhashas2, asdhashas3, asdhashas4 } from './layout.scss';

const Layout = ({ children }) => {
  return (
    <div >
      <Link to="/">
        <div as="h1" className={`${h1} ${pullRight} ${asdhashas1} ${asdhashas} ${asdhashas2} ${asdhashas3} ${asdhashas4}`}>
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
