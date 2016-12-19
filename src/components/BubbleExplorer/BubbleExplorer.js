import React, { PropTypes } from 'react';
import Editor from '../Editor';
import {Motion, spring} from 'react-motion';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './BubbleExplorer.css';
import contentStyle from '../contentBox.css';

@withStyles(s, contentStyle)
export default class BubbleExplorer extends React.Component {

  static propTypes = {
    window: PropTypes.object.isRequired,
  };

  state = {
    expandedCategory: 'introductions',
  };

  render() {
    return (
      <div className={s.bubbleExplorerRoot}>
        {this.renderNode('introductions', 'handshake-o')}
        {this.renderNode('ephemerality', 'snowflake-o')}
        {this.renderNode('books', 'book')}
        {this.renderNode('technology', 'laptop')}
        <div className={cx(s.nextButton, s.navButton)}>
          <i className='fa fa-chevron-right' />
        </div>
      </div>
    );
  }

  renderNode(category, iconName) {
    const {window = {width: 600}} = this.props;
    const isExpanded = this.state.expandedCategory === category;
    const classes = cx(s.philNode, {[s.expanded]: isExpanded})
    const pos = positions[category];
    const style = {
      top: isExpanded? 130 : (400 + pos.y),
      left: isExpanded? 0 : pos.x,
      height: isExpanded? 350 : 120,
      width: isExpanded? window.width * .7 : 50,
    };
    const config = {stiffness: 300, damping: 35};
    const motion = {
      top: spring(style.top, config),
      left: spring(style.left, config),
      width: spring(style.width, config),
      height: spring(style.height, config),
      parentWidth: spring(150, config),
    };
    return (
      <Motion style={motion}>
      {styles => (
        <div className={classes}
             style={{
              top: styles.top,
              left: styles.left,
              height: styles.height,
              ...(isExpanded? {width: '100%'} : {width: styles.parentWidth}),
            }}
             onClick={this.toggleCategory.bind(this, category)}>
          <div className={cx(contentStyle.contentBoxArea, s.contentArea)} style={{width: styles.width}}>
            <i className={`fa fa-${iconName}`} />
            <div className={cx(contentStyle.contentBox, s.content, {
              [contentStyle.visible]: isExpanded,
            })}>
              {contents[category]()}
              {category === 'introductions' && <video style={{width: '400px', margin: '0 auto'}} ref='video' src='http://d1iv9j7x4n3nsi.cloudfront.net/lampshade.mp4' autoplay="true" autostart="true" controls></video>}
            </div>
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

  onResize() {
    this.setState({windowWidth: aWindow.innerWidth});
  }

}

var contents = {
  books: () => <Editor>{"<h3>books are god</h3>well you see the thing about books is that they’re great. read more of them. Bespoke brunch farm-to-table knausgaard. Health goth subway tile chartreuse, polaroid wayfarers iceland forage street art edison bulb banjo shabby chic godard trust fund vaporware copper mug. Ethical hashtag messenger bag gluten-free paleo shoreditch pinterest twee, flexitarian single-origin coffee dreamcatcher. Actually put a bird on it jean shorts narwhal schlitz thundercats forage. Kitsch blue bottle leggings humblebrag hoodie, four dollar toast man bun venmo mustache crucifix banh mi. Asymmetrical pinterest mixtape blue bottle biodiesel raw denim cardigan. Tacos drinking vinegar street art, marfa literally tbh pabst locavore asymmetrical next level food truck. Kinfolk copper mug selfies typewriter. Vape asymmetrical biodiesel flexitarian single-origin coffee master cleanse. Succulents cliche lumbersexual af, affogato bitters gochujang humblebrag microdosing fashion axe. Kitsch cornhole artisan, try-hard raclette gastropub fam waistcoat. Marfa DIY meh, tofu readymade celiac man bun franzen hexagon dreamcatcher raw denim hot chicken. Vice pickled edison bulb 8-bit forage. Bitters fashion axe try-hard cronut readymade man bun."}</Editor>,
  ephemerality: () => <Editor>this here is the key to living a stress-free life. build sandcastles, baby!</Editor>,
  technology: () => <Editor>oh what a love-hate relationship we have. a tool so easily misused.</Editor>,
  introductions: () => <Editor>{"<h3>&nbsp;namaste | welcome</h3>here, you have stumbled upon the pinnacle of philosophical discourse. this tome of knowledge aims to provide you with the latest explorations into what it means to be human in the modern age. lampshade is​ a mindful hub to freely and compassionately explore yourself and share your ideas, get inspired, collaborate, create, and motivate. <br /><br />it's all a dream. anyway..."}</Editor>,
};
var positions = {
  books: {x: 740, y: 80},
  ephemerality: {x: 650, y: 225},
  technology: {x: 340, y: 110},
  introductions: {x: 530, y: 90},
}
