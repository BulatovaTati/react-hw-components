import styled from 'styled-components';
import { RiUserFollowLine } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const IconUser = styled(RiUserFollowLine)`
  padding: ${props => props.theme.space[2]}px;
  border: 1px solid ${props => props.theme.colors.bcgBtn};
  border-radius: 50%;
  margin-right: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.iconColor};
  cursor: pointer;
  transition: color 250ms linear;

  :hover {
    color: ${props => props.theme.colors.whiteTextColor};
  }
`;
export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[4]}px;
  border: none;

  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
