import React from 'react';
import MediumBackground from 'react-medium-editor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Background.css';

@withStyles(s)
export default class Background extends React.Component {

  render() {
    return (
      <div className={s.bgImageArea}>
        <div className={s.topImageArea}>
          <img className={cx(s.bgImage, s.topImage)} src='trippy.jpg' />
        </div>
        <img className={s.bgImage} src='scooter.jpg' />
        <img className={s.bgImage} src='train.jpg' />
      </div>
    );
  }

}
