/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Navigation from '../Navigation';
import SocialNav from '../SocialNav';
import Footer from '../Footer';
import Background from '../Background';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';

@withStyles(s)
class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.string,
  };

  render() {
    return (
      <div className={s.layoutRoot}>
        <Background />
        <div className={s.headerContainer}>
          <Navigation location={this.props.location} />
          <SocialNav />
        </div>
        <div className={s.content}>
          {this.props.children}
        </div>
        <div className={s.footerContainer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
