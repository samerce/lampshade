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
        {this.renderPost()}
        {this.renderPost()}
        {this.renderPost()}
      </div>
    );
  }

  renderPost() {
    return (
      <div className={cx(contentStyle.contentBoxArea, s.postContentArea)}>
        <div className={cx(contentStyle.contentBox, contentStyle.visible)}>
          Everyday carry small batch flannel schlitz, synth whatever tousled hammock asymmetrical retro. Pour-over sriracha tofu readymade chia, vinyl taxidermy. Letterpress try-hard swag tacos, jean shorts wolf yuccie hot chicken cray offal edison bulb fingerstache. 3 wolf moon selvage echo park, street art live-edge hot chicken austin chia authentic craft beer messenger bag bespoke air plant tattooed put a bird on it. Fashion axe pitchfork bespoke brooklyn letterpress kogi jean shorts hot chicken vice put a bird on it. VHS pok pok single-origin coffee beard blog. Tbh lyft shabby chic ethical, fap tilde bitters freegan gentrify trust fund 90's bushwick chartreuse distillery.

  Church-key portland pabst, typewriter succulents salvia craft beer tumeric vexillologist banh mi street art tumblr beard. Chia pok pok tumblr meditation tumeric, direct trade gentrify. Meh pinterest schlitz, chartreuse pabst master cleanse ugh. Heirloom asymmetrical photo booth 8-bit tumeric master cleanse gastropub, health goth fashion axe four loko. Quinoa taxidermy ramps wayfarers, keytar typewriter vegan fap. Vice bitters try-hard vegan, blog yr edison bulb pork belly fashion axe. Banjo leggings la croix, chillwave portland bespoke mumblecore tote bag pickled organic thundercats lomo.

  Bushwick fixie offal, photo booth cardigan seitan cliche sartorial scenester live-edge mumblecore messenger bag direct trade. Venmo bushwick mustache, cred plaid kombucha wolf enamel pin deep v lyft beard intelligentsia. Kombucha poke occupy, marfa lomo flexitarian messenger bag tumeric. Sriracha cray truffaut vape asymmetrical yuccie messenger bag. Flannel wayfarers disrupt plaid bitters. Whatever subway tile tote bag, kinfolk vice air plant VHS mixtape before they sold out lyft iceland yr pitchfork. Echo park knausgaard fam, yuccie crucifix 3 wolf moon lyft.

  Authentic tumeric coloring book banjo polaroid. Brooklyn man bun raw denim hoodie, freegan austin cardigan venmo polaroid shabby chic 90's. Truffaut next level iceland gluten-free kombucha VHS mixtape wayfarers, hoodie taxidermy health goth microdosing viral pickled keffiyeh. You probably haven't heard of them organic roof party hella vegan drinking vinegar. Iceland lumbersexual man bun, forage post-ironic snackwave pinterest tote bag semiotics jean shorts. Coloring book everyday carry banjo gluten-free. Hot chicken fashion axe post-ironic, hashtag fam echo park DIY forage.
        </div>
      </div>
    );
  }

}
