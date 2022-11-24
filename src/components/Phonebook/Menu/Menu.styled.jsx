import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.NavBGColor};
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ isOpen }) => (isOpen ? 'orange' : '#fff')};
  font-size: 30px;
  border: none;
  border-radius: 50%;
  border: 1px solid;

  border-color: ${({ isOpen }) => (isOpen ? 'orange' : '#fff')};
  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;

  :not(:last-child) {
    margin-left: auto;
    margin-right: 10px;
  }
  :hover {
    color: ${props => props.theme.colors.activeTextColor};
    border-color: ${props => props.theme.colors.activeTextColor};
  }
`;
