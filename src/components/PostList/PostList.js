import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './PostList.css';
import contentStyle from '../contentBox.css';

@withStyles(s, contentStyle)
export default class PostList extends React.Component {

  render() {
    return (
      <div className={s.postListRoot}>
        <div className={cx(contentStyle.contentBoxArea, s.postContentArea)}>
          <div className={cx(contentStyle.contentBox, contentStyle.visible)}>
            this is content
          </div>
        </div>
      </div>
    );
  }

}
