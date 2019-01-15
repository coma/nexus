import React from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (${props => props.theme['--screen-medium']}) {
    background: ${props => props.theme['--color-light']};
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    height: calc(100% - 2.5rem);
    left: 32rem;
    position: fixed;
    top: 2.5rem;
    width: calc(100% - 32rem);
  }
`;

function Empty() {
  return <Wrapper />;
}

export default Empty;
