import React, {PropTypes} from 'react';
import MediumEditor from 'react-medium-editor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Editor.css';

import LocalStorageMixin from 'react-localstorage';
import mixin from 'react-mixin';

const editorOptions = {
  buttonLabels: 'fontawesome',
  toolbar: {
    buttons: [
      'bold',
      'italic',
      'underline',
      'h1',
      'h2',
      'h3',
      'anchor',
      'quote',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
    ],
  },
};

@withStyles(s)
@mixin.decorate(LocalStorageMixin)
export default class Editor extends React.Component {

  static propTypes = {
    id: PropTypes.string,
  };

  state = {
    text: 'you can edit this text!',
  };

  componentWillMount() {
    const {children} = this.props;
    if (children) {
      this.setState({text: children});
    }
  }

  render() {
    return (
      <div className={s.editor}>
        <MediumEditor text={this.state.text}
                      options={editorOptions}
                      onChange={this.onChange.bind(this)} />
      </div>
    );
  }

  onChange(text) {
    this.setState({text});
  }

  getLocalStorageKey() {
    const {id} = this.props;
    return id? 'editorContent-' + id : false;
  }

}
