import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Contacts } from './ContactList.style';

class ContactList extends Component {
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      contacts: props.items.filter(
        contact =>
          contact.name.last.startsWith(state.q) ||
          contact.name.first.startsWith(state.q),
      ),
    };
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
    const { q, contacts } = this.state;

    return (
      <Wrapper>
        <Input placeholder="search..." onChange={this.onSearch} value={q} />
        <Contacts items={contacts} />
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
