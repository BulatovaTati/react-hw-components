import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    color: #64b5f6;
  }
`;
