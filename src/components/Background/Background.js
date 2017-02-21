import React from 'react';
import MediumBackground from 'react-medium-editor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Background.css';
import buttonStyle from '../../css/button.css';

const imageUrl = 'http://d1iv9j7x4n3nsi.cloudfront.net/images';

@withStyles(s, buttonStyle)
export default class Background extends React.Component {

  state = {
    expandedImages: {},
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.topImageArea}>
          <img className={cx(s.bgImage, s.topImage)} src={`${imageUrl}/sidewalk.jpg`} />
        </div>
        {this.renderBackground('face.jpg')}
        {this.renderBackground('alice.jpg')}
      </div>
    );
  }

  renderBackground(imageName) {
    const isExpanded = this.state.expandedImages[imageName];
    const iconName = isExpanded? 'eye-slash' : 'eye';
    return (
      <div className={cx(s.bgArea, {[s.expanded]: isExpanded})}>
        <img className={s.bgImage} src={`${imageUrl}/${imageName}`} />
        <div className={cx(buttonStyle.button, s.expandButton)}
             onClick={this.toggleExpandedImage.bind(this, imageName)}>
          <i className={`fa fa-${iconName}`} />
        </div>
      </div>
    );
  }

  toggleExpandedImage(imageName) {
    const {expandedImages} = this.state;
    if (expandedImages[imageName]) {
      expandedImages[imageName] = null;
    } else {
      expandedImages[imageName] = imageName;
    }
    this.setState({expandedImages});
  }

}
