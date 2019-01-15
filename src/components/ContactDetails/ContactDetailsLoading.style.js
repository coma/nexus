import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const rotate = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

export const Wrapper = styled.div``;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => rgba(props.theme['--color-primary'], 0.9)};
  animation: ${rotate} 1.2s infinite ease-in-out;
`;
