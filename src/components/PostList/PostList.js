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
        {this.renderPost(1)}
        {this.renderPost(2)}
        {this.renderPost(3)}
      </div>
    )
  }

  renderPost(id) {
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
          Everyday carry small batch flannel schlitz, synth whatever tousled hammock asymmetrical retro. Pour-over sriracha tofu readymade chia, vinyl taxidermy. Letterpress try-hard swag tacos, jean shorts wolf yuccie hot chicken cray offal edison bulb fingerstache. 3 wolf moon selvage echo park, street art live-edge hot chicken austin chia authentic craft beer messenger bag bespoke air plant tattooed put a bird on it. Fashion axe pitchfork bespoke brooklyn letterpress kogi jean shorts hot chicken vice put a bird on it. VHS pok pok single-origin coffee beard blog. Tbh lyft shabby chic ethical, fap tilde bitters freegan gentrify trust fund 90's bushwick chartreuse distillery.

  <br /><br />Church-key portland pabst, typewriter succulents salvia craft beer tumeric vexillologist banh mi street art tumblr beard. Chia pok pok tumblr meditation tumeric, direct trade gentrify. Meh pinterest schlitz, chartreuse pabst master cleanse ugh. Heirloom asymmetrical photo booth 8-bit tumeric master cleanse gastropub, health goth fashion axe four loko. Quinoa taxidermy ramps wayfarers, keytar typewriter vegan fap. Vice bitters try-hard vegan, blog yr edison bulb pork belly fashion axe. Banjo leggings la croix, chillwave portland bespoke mumblecore tote bag pickled organic thundercats lomo.

  Bushwick fixie offal, photo booth cardigan seitan cliche sartorial scenester live-edge mumblecore messenger bag direct trade. Venmo bushwick mustache, cred plaid kombucha wolf enamel pin deep v lyft beard intelligentsia. Kombucha poke occupy, marfa lomo flexitarian messenger bag tumeric. Sriracha cray truffaut vape asymmetrical yuccie messenger bag. Flannel wayfarers disrupt plaid bitters. Whatever subway tile tote bag, kinfolk vice air plant VHS mixtape before they sold out lyft iceland yr pitchfork. Echo park knausgaard fam, yuccie crucifix 3 wolf moon lyft.

  <br /><br />Authentic tumeric coloring book banjo polaroid. Brooklyn man bun raw denim hoodie, freegan austin cardigan venmo polaroid shabby chic 90's. Truffaut next level iceland gluten-free kombucha VHS mixtape wayfarers, hoodie taxidermy health goth microdosing viral pickled keffiyeh. You probably haven't heard of them organic roof party hella vegan drinking vinegar. Iceland lumbersexual man bun, forage post-ironic snackwave pinterest tote bag semiotics jean shorts. Coloring book everyday carry banjo gluten-free. Hot chicken fashion axe post-ironic, hashtag fam echo park DIY forage.
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
