import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 12px;
  height: 85px;
  padding: 8px 0;
  border-bottom: 1px solid black;
  background: ${props => props.theme.colors.NavBGColor};

  > nav {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.whiteTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 ${props => props.theme.space[4]}px;
  height: 100%;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &.active {
    color: ${props => props.theme.colors.activeTextColor};
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.activeTextColor};
  }
`;
