import React from 'react';
import Autosuggest from 'react-autosuggest';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './TagInput.css';
import autosuggestTheme from '../autosuggestTheme.css';

import autobind from 'autobind-decorator';

const tags = [
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

  return inputLength === 0 ? [] : tags.filter(tag =>
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
  };

  render() {
    const {value, suggestions} = this.state;
    const inputProps = {
      value,
      placeholder: 'add tags',
      onChange: this.onChange,
    }
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        focusFirstSuggestion={true}
        theme={autosuggestTheme} />
    );
  }

  @autobind
  onChange(event, {newValue}) {
    this.setState({
      value: newValue
    });
  }

  // Autosuggest calls this every time you need to update suggestions
  @autobind
  onSuggestionsFetchRequested({value}) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  @autobind
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

}
