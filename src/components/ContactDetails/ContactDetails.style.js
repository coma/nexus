import { rgba } from 'polished';
import styled from 'styled-components';

import Icon from '../Icon';

export const Wrapper = styled.article`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  ${props => props.theme['--font-extra-large']};
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  text-align: center;
`;

export const ArrowIcon = styled(Icon).attrs({
  children: 'arrow_back_ios',
})`
  height: 5rem;
  left: 0;
  line-height: 5rem;
  position: absolute;
  top: 0;
  width: 5rem;
`;
