import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const TrendList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

export const Card = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  background-color: #64b5f6;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 5px;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    color: white;
  }
`;
