import React from 'react';
import PropTypes from 'prop-types';

function ContactDetailsCard(props) {
  return <h2>{props.contact.name.first}</h2>;
}

ContactDetailsCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactDetailsCard;
