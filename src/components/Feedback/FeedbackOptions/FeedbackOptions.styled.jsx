import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BtnItem = styled.li`
  margin: ${props => props.theme.space[3]}px;
`;

export const Button = styled.button`
  min-width: 120px;
  padding: 10px 20px;
  border: none;
  border: 2px solid ${props => props.theme.colors.whiteTextColor};
  font-size: ${props => props.theme.fontSizes[3]}px;
  color: ${props => props.theme.colors.whiteTextColor};
  background-color: ${props => props.theme.colors.bcgBtn};
  text-align: center;
  transition: all 250ms linear;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    border: 2px solid ${props => props.theme.colors.bcgBtn};
    color: ${props => props.theme.colors.bcgBtn};
    background-color: ${props => props.theme.colors.whiteTextColor};
  }
`;
