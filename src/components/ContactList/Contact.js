import React from 'react';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../Avatar';
import Link from '../Link';

const Container = styled('div')``;
const Name = styled('span')``;
const Phone = styled('span')``;

const Contact = ({
  className,
  id,
  name: { first, last },
  phone,
  picture: { thumbnail },
}) => (
  <Link to={id}>
    <article className={className} id={`contact-${id}`}>
      <Avatar image={thumbnail} name={`${first} ${last}`} />
      <Container>
        <Name>{`${first} ${last}`}</Name>
        <Phone>{phone}</Phone>
      </Container>
    </article>
  </Link>
);

Contact.defaultProps = {
  className: '',
  phone: '',
  picture: {},
};

Contact.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  phone: PropTypes.string,
  picture: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
};

export default styled(Contact)`
  border-bottom: 0.1rem solid ${props => rgba(props.theme['--color-dark'], 0.1)};
  display: flex;
  margin: 0 1.2rem 0 2.4rem;
  padding: 0.8rem 0;

  ${Avatar} {
    height: 6rem;
    width: 6rem;
  }

  ${Container} {
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ${Name} {
    ${props => props.theme['--font-large']};
    font-weight: ${props => props.theme['--font-weight-demi']};
  }

  ${Phone} {
    ${props => props.theme['--font-small']};
    color: ${props => props.theme['--font-opacity-40']};
    font-weight: ${props => props.theme['--font-weight-demi']};
  }
`;
