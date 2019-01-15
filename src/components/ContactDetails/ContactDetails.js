import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import getContact from './getContact';
import { Wrapper, Container, Header, ArrowIcon } from './ContactDetails.style';

class ContactDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {};

  componentDidMount() {
    this.getContact();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    const { id: prevId } = prevProps.match.params;
    if (id !== prevId) {
      this.getContact();
    }
  }

  async getContact() {
    const { id } = this.props.match.params;
    this.setState({ contact: null });
    this.setState({ contact: await getContact(id) });
  }

  render() {
    const { contact } = this.state;

    return (
      <Wrapper>
        <Header>
          <Link to="/">
            <ArrowIcon />
          </Link>
        </Header>
        <Container>{contact ? contact.name.first : 'loading'}</Container>
      </Wrapper>
    );
  }
}

export default ContactDetails;
