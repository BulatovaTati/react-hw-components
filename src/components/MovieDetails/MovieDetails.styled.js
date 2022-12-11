import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: block;
  padding: 10px;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #64b5f6;

  :not(:last-child) {
    margin-right: ${props => props.theme.space[4]}px;
  }
`;
