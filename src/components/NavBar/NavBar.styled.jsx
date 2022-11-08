import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${props => props.theme.colors.NavBGColor};
  height: 85px;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 ${props => props.theme.space[4]}px;
  height: 100%;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &.active {
    color: ${props => props.theme.colors.whiteTextColor};
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.whiteTextColor};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
