import React, { Component } from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Contacts from '../../services/contacts';
import Icon from '../Icon';
import Link from '../Link';

const Container = styled('section')``;
const Header = styled('header')``;

class ContactDetails extends Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
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
    this.setState({ contact: await Contacts.read(id) });
  }

  render() {
    const { contact } = this.state;

    return (
      <article className={this.props.className}>
        <Header>
          <Link to="/">
            <Icon>arrow_back_ios</Icon>
          </Link>
        </Header>
        <Container>{contact ? contact.name.first : 'loading'}</Container>
      </article>
    );
  }
}

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;

    ${Icon} {
      height: 5rem;
      left: 0;
      line-height: 5rem;
      position: absolute;
      top: 0;
      width: 5rem;
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
