import React from 'react';
import Autosuggest from 'react-autosuggest';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './TagInput.css';
import autosuggestTheme from '../autosuggestTheme.css';

import autobind from 'autobind-decorator';

const TAGS = [
  'ego',
  'collective consciousness',
  'addiction',
  'adderall',
  'addenda',
  'dance'
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : TAGS.filter(tag =>
    tag.slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

@withStyles(s, autosuggestTheme)
export default class TagInput extends React.Component {

  state = {
    tags: ['economy'],
    value: '',
    suggestions: [],
    isSuggestionFocused: false,
  };

  render() {
    const {value, suggestions} = this.state;
    const inputProps = {
      value,
      placeholder: 'add tag',
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
    }
    return (
      <div className={s.tagInputArea}>
        <div className={s.tagList}>
          {this.state.tags.map(tag => (
            <div className={s.tagArea} onClick={this.removeTag.bind(this, tag)}>
              <i className='fa fa-close' />
              <div className={s.tag}>
                {tag}
              </div>
            </div>
          ))}
        </div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          updateFocusedSuggestion={this.updateFocusedSuggestion}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          focusFirstSuggestion={true}
          theme={autosuggestTheme}
          onSuggestionSelected={this.onTagSelected} />
      </div>
    );
  }

  @autobind
  updateFocusedSuggestion(sectionIndex, itemIndex) {
    this.setState({isSuggestionFocused: itemIndex < 0});
  }

  @autobind
  onTagSelected(e, data) {
    this.addTag(data.suggestionValue);
  }

  @autobind
  onChange(event, {newValue}) {
    this.setState({
      value: newValue
    });
  }

  @autobind
  onKeyDown(e) {
    const {value} = this.state;
    if (e.keyCode == 13 && !this.state.isSuggestionFocused) {
      this.addTag(value);
    }
  }

  addTag(tag) {
    const tags = [...this.state.tags];
    if (tags.includes(tag)) return this.setState({value: ''});

    tags.push(tag);
    this.setState({tags, value: ''});
  }

  removeTag(tag) {
    const tags = this.state.tags.filter(t => t !== tag);
    this.setState({tags});
  }

  // Autosuggest calls this every time you need to update suggestions
  @autobind
  onSuggestionsFetchRequested({value}) {
    const suggestions = getSuggestions(value);
    this.setState({
      suggestions,
      isSuggestionFocused: this.state.suggestions.length === 0 && suggestions.length > 0,
    });
  }

  @autobind
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

}
