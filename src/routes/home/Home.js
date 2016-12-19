import React, { PropTypes } from 'react';
import BubbleExplorer from '../../components/BubbleExplorer';
import PostList from '../../components/PostList';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

@withStyles(s)
export default class Home extends React.Component {

  render() {
    return (
      <div className={s.homeContainer}>
        <BubbleExplorer window={this.props.window} />
        <PostList />
      </div>
    );
  }

}
