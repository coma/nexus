import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 600px;
  max-width: 100vw;
  padding: 24px;
  border: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
  border-radius: 0.4rem;
  background-color: ${props => props.theme['--color-light']};
`;

export const Info = styled.div`
  padding: 16px;
`;

export const Name = styled.div`
  ${props => props.theme['--font-extra-large']};
  font-weight: ${props => props.theme['--font-weight-medium']};
  margin: 1em 0;
  padding-bottom: 0.5em;
  text-align: center;
  margin-bottom: 1m;
  border-bottom: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
  text-transform: capitalize;
`;

export const Details = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

export const Email = styled.a`
  display: block;
  ${props => props.theme['--font-large']};

  &::before {
    content: '✉️ ';
  }
`;

export const Phone = styled.a`
  display: block;
  ${props => props.theme['--font-large']};

  &::before {
    content: '☎️ ';
  }
`;

export const Picture = styled.div`
  font-size: 48px;
  width: 1em;
  height: 1em;
  margin: 0 auto;
  border-right: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
  border-radius: 50%;
  background-color: ${props => props.theme['--color-dark']};
  background-image: url(${props => props.sizes.medium});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;

  @media (${props => props.theme['--screen-small']}) {
    font-size: 128px;
    background-image: url(${props => props.sizes.large});
  }
`;

Picture.propTypes = {
  sizes: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
  }).isRequired,
};
