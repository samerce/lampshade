import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SocialNav.css';

@withStyles(s)
export default class SocialNav extends React.Component {

  render() {
    return (
      <div className={cx(s.navArea, s.navButton, s.navSocialNetworks)} role='navigation'>
        <a className={cx(s.navLink, "icon")}
           href="mailto:smile@lampshade.life"
           target='_blank'>
           <i className="fa fa-envelope"></i>
         </a>
        <a className={cx(s.navLink, "icon")}
           href="http://ypsilampshade.tumblr.com"
           target="_blank">
          <i className="fa fa-tumblr"></i>
        </a>
        <a className={cx(s.navLink, "icon")}
           href="https://facebook.com/lampshade.life"
           target="_blank">
          <i className="fa fa-facebook"></i>
        </a>
        <a className={cx(s.navLink, "icon")}
           href="https://twitter.com/ypsilampshade"
           target="_blank">
           <i className="fa fa-twitter"></i>
         </a>
      </div>
    );
  }

}
