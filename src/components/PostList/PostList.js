import React from 'react';
import Editor from '../Editor';
import TagInput from '../TagInput';
import CategoryInput from '../CategoryInput';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './PostList.css';
import buttonStyle from '../../css/button.css';
import contentStyle from '../contentBox.css';

import autobind from 'autobind-decorator';

const publishOptions = {
  save: {
    icon: 'save',
    text: 'save draft',
  },
  publish: {
    icon: 'send',
    text: 'publish',
  },
  republish: {
    icon: 'send',
    text: 'republish',
  },
}

const content = [
  {
    feature: (<iframe width="1280" height="720" src="https://www.youtube.com/embed/C59QSCVpSuY" frameBorder="0" allowFullScreen></iframe>),
  },
  {
    feature: (<iframe width="1280" height="720" src="https://www.youtube.com/embed/RTmW_nTDuXk" frameBorder="0" allowFullScreen></iframe>),
    blurb: (<div>“trump is a sexy, sexy man. self-assurance is wildly attractive. a man who ignores reality and creates his own is sexy.” <br /><br />
. . . the moment you start to seriously question your sanity, your basic understanding of time, space and matter—all you’ve been taught to be true—is also the moment you start to seriously question everyone else’s.<br /><br />
 & in this moment you know you’re onto it: salvation; freedom outside of man’s hopeless grasping at life. outside the dogma of fitting in; outside the need to be something, to do something, to prove something. once you move beyond the fake duality of good and evil, right and wrong, doing and being—you arrive naked in the rocks, utterly free, without any pre-existing condition(ing).<br /><br />
here lies a world beyond labels and title. a world where each man is his own user’s guide to life. his own morals and codes and purpose for existence—means and ends unto himself.<br /><br />
from here, it is a long improvisational dance back towards finding equilibrium between your lucid rationality & the irresistibly irrational waking world.<br /><br />
a brave dance that can’t be bought or taught - simply felt, uncovered by curiosity’s experience.</div>),
  },
  {
    feature: (<iframe width="1280" height="720" src="https://www.youtube.com/embed/S5LiwweHd1w" frameBorder="0" allowFullScreen></iframe>),
  },
  {
    feature: (<iframe width="1280" height="720" src="https://www.youtube.com/embed/zzYtehSP49Q" frameBorder="0" allowFullScreen></iframe>),
  },
]

@withStyles(s, contentStyle, buttonStyle)
export default class PostList extends React.Component {

  state = {
    expandedPosts: {},
    postType: 'blog',
    title: 'don your sex clothes',
    category: 'politics',
    publishOptionsOrder: ['save', 'publish', 'republish'],
  };

  render() {
    return (
      <div className={s.postListRoot}>
        {content.map((val, id) => this.renderPost(val, id))}
      </div>
    )
  }

  renderPost(post, id) {
    const {title, category, tag} = this.state;
    const isExpanded = this.state.expandedPosts[id];
    const rootStyle = cx(
      contentStyle.contentBoxArea,
      s.postContentArea,
      {
        [s.expanded]: isExpanded
      },
    )
    return (
      <div className={rootStyle}>
        <div className={s.typeArea}>
          {this.renderType('blog', 'road')}
          {this.renderType('feature', 'gift')}
          {this.renderType('spotlight', 'podcast')}
        </div>
        <div className={s.publishArea}>
          {this.renderPublishOptions()}
        </div>
        <div className={cx(s.inputArea, s.titleArea)}>
          <Editor className={s.title}>{title}</Editor>
        </div>
        <div className={s.secondaryInputArea}>
          <div className={cx(s.inputArea, s.categoryArea)}>
            <CategoryInput />
          </div>

          <div className={cx(s.inputArea, s.tagArea)}>
            <TagInput />
          </div>
        </div>
        <div className={s.imageButtonArea}>
          <div className={s.typeItem}>
            <i className={`fa fa-image`} />
            <div className={s.typeName}>image</div>
          </div>
        </div>
        <div className={cx(contentStyle.contentBox, contentStyle.visible, s.postContent)}>
          <div className={s.videoArea}>
            {post.feature}
          </div>
          {post.blurb &&
            <div className={s.contentBlurb}>
              {post.blurb}
            </div>
          }
        </div>
        <div className={cx(buttonStyle.button, s.expandButton)}
             onClick={this.togglePostExpansion.bind(this, id)}>
          <i className={`fa fa-${isExpanded? 'chevron-up' : 'chevron-down'}`} />
        </div>
      </div>
    );
  }

  renderPublishOptions() {
    const isPublished = false;
    let numOptions = -1;
    return this.state.publishOptionsOrder.map((key, i) => {
      const option = publishOptions[key];
      const isDisabled = (key !== 'save') || isPublished ? (key === 'republish') : (key === 'publish')
      const classes = cx(s.publishOption, {
        [s.publishOptionHidden]: i > 0,
        [s.publishOptionDisabled]: isDisabled,
      })
      if (!isDisabled) numOptions++;
      return (
        <div className={classes} style={{
          transform: `translateY(-${numOptions * 60}px)`,
          zIndex: 4 - i,
        }}>
          <i className={`fa fa-${option.icon}`} />
          <div className={s.publishOptionText}>{option.text}</div>
        </div>
      );
    });
  }

  renderType(typeName, iconName) {
    const classes = cx(s.typeItem, {
      [s.typeItemSelected]: typeName === this.state.postType,
    });
    return (
      <div className={classes}
           onClick={this.changePostType.bind(this, typeName)}>
        <i className={`fa fa-${iconName}`} />
        <div className={s.typeName}>{typeName}</div>
      </div>
    )
  }

  changePostType(postType) {
    this.setState({postType});
  }

  togglePostExpansion(id) {
    const {expandedPosts} = this.state;
    this.setState({
      expandedPosts: {
        ...expandedPosts,
        [id]: !expandedPosts[id],
      },
    });
  }

}
