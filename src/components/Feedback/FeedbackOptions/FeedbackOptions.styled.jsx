import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BtnItem = styled.li`
  margin: 10px;
`;

export const Button = styled.button`
  min-width: 120px;
  padding: 10px 20px;
  border: none;
  border: 2px solid #fff;
  font-size: 20px;
  color: #fff;
  background-color: #66abe7;
  text-align: center;
  transition: all 250ms linear;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    border: 2px solid #66abe7;
    color: #66abe7;
    background-color: #fff;
  }
`;
