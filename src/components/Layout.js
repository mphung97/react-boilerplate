import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1, asdhashas, asdhashas1, asdhashas2, asdhashas3, asdhashas4 } from './layout.scss';

const Layout = ({ children }) => {
  function test() {
    fetch('../../README.md')
      .then(
        res => res.text()
      )
      .then(
        md => console.log(md)
      )
  }
  return (
    <div >
      <Link to="/">
        <div className={`${h1} ${asdhashas1} ${asdhashas} ${asdhashas2} ${asdhashas3} ${asdhashas4}`}>
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
