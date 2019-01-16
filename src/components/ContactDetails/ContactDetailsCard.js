import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Picture,
  Name,
  Details,
  Email,
  Phone,
} from './ContactDetailsCard.style';

function ContactDetailsCard({ contact }) {
  return (
    <Wrapper>
      <Picture sizes={contact.picture} />
      <Name>
        {contact.name.title} 
        {' '}
        {contact.name.first} 
        {' '}
        {contact.name.last}
      </Name>
      <Details>
        <Email href={`mailto:${contact.email}`}>{contact.email}</Email>
        <Phone href={`tel:${contact.phone}`}>{contact.phone}</Phone>
      </Details>
    </Wrapper>
  );
}

ContactDetailsCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
    }).isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
    }).isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default ContactDetailsCard;
