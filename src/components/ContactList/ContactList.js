import React, { Component } from 'react';
import PropTypes from 'prop-types';

import filterAndSort from './filterAndSort';
import getLetters from './getLetters';
import { Wrapper, Input, Contacts, Letters, Letter } from './ContactList.style';

class ContactList extends Component {
  static getDerivedStateFromProps(props, state) {
    const contacts = filterAndSort(props.items, state.q);
    const letters = getLetters(contacts);

    return { ...state, contacts, letters };
  }

  constructor(props) {
    super(props);
    this.state = { q: '' };
    // you should ask me why I prefer this rather than other options...
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.setState({ q: event.target.value });
  }

  render() {
    const { q, contacts, letters } = this.state;

    return (
      <Wrapper>
        <Input placeholder="search..." onChange={this.onSearch} value={q} />
        <Contacts items={contacts} />
        <Letters>
          {letters.map(({ letter, id }) => (
            <Letter key={letter} isDisabled={!id} href={`#contact-${id}`}>
              {letter}
            </Letter>
          ))}
        </Letters>
      </Wrapper>
    );
  }
}

ContactList.defaultProps = {
  items: [],
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
};

export default ContactList;
