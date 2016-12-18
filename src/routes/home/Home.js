/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Editor from '../../components/Editor';
import {Motion, spring} from 'react-motion';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import cx from 'classnames';

@withStyles(s)
export default class Home extends React.Component {
  state = {
    expandedCategory: '',
  };

  render() {
    return (
      <div className={s.homeRoot}>
        {this.renderNode('introductions', 'handshake-o')}
        {this.renderNode('ephemerality', 'snowflake-o')}
        {this.renderNode('books', 'book')}
        {this.renderNode('technology', 'laptop')}
      </div>
    );
  }

  renderNode(category, iconName) {
    const isExpanded = this.state.expandedCategory === category;
    const classes = cx(s.philNode, {[s.expanded]: isExpanded})
    const pos = positions[category];
    const style = {
      top: isExpanded? 80 : (400 + pos.y),
      left: isExpanded? 0 : pos.x,
    };
    const config = {stiffness: 200, damping: 25};
    return (
      <Motion style={{top: spring(style.top, config), left: spring(style.left, config)}}>
      {styles => (
        <div className={classes}
             style={styles}
             onClick={this.toggleCategory.bind(this, category)}>
          <div className={s.contentArea}>
            <i className={`fa fa-${iconName}`} />
            <div className={s.content}>{contents[category]()}</div>
          </div>
          <div className={s.titleArea}>
            <span>on {category}</span>
          </div>
        </div>
      )}
      </Motion>
    );
  }

  toggleCategory(category) {
    let expandedCategory = category;
    if (this.state.expandedCategory === category) return;
    this.setState({expandedCategory});
  }
}

var contents = {
  books: () => <Editor>well you see the thing about books is that they’re great. read more of them.</Editor>,
  ephemerality: () => <Editor>this here is the key to living a stress-free life. build sandcastles, baby!</Editor>,
  technology: () => <Editor>oh what a love-hate relationship we have. a tool so easily misused.</Editor>,
  introductions: () => <Editor>namaste | welcome {'\n\n'}here, you have stumbled upon the pinnacle of philosophical discourse.
            this tome of knowledge aims to provide you with the latest explorations into what it
            means to be human in the modern age.</Editor>,
};
var positions = {
  books: {x: -130, y: 60},
  ephemerality: {x: 50, y: 30},
  technology: {x: 400, y: 80},
  introductions: {x: 250, y: 100},
}
