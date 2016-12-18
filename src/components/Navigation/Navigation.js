/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Link from '../Link';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';

@withStyles(s)
export default class Navigation extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    location: PropTypes.string,
  };

  render() {
    return (
      <div className={s.navArea} role='navigation'>
        <a className={s.navLogo} href="/" onClick={Link.onClick}>
          <span className={s.navLogoTxt}>lampshade</span>
        </a>
      </div>
    );
  }

}
