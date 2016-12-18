import React from 'react';
import MediumEditor from 'react-medium-editor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Editor.css';

const editorOptions = {
  buttonLabels: 'fontawesome',
};

@withStyles(s)
class Editor extends React.Component {

  state = {
    text: 'you can edit this text!',
  };

  render() {
    return (
      <div className={s.editor}>
        <MediumEditor text={this.props.children}
                      options={editorOptions} />
      </div>
    );
  }

}

export default Editor;
