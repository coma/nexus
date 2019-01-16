import styled from 'styled-components';
import { rgba } from 'polished';

import Contact from './Contact';
import List from '../List';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2.5rem);
  @media (${props => props.theme['--screen-medium']}) {
    width: 32rem;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
})`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 16px 8px;
  border: none;
  flex-shrink: 0;
  outline: none;
  background-color: ${props => rgba(props.theme['--color-dark'], 0.05)};
`;

export const Contacts = styled(List).attrs({
  template: Contact,
})`
  flex-grow: 1;
  margin-top: 1.2rem;
  list-style: none;
  overflow: auto;
`;
