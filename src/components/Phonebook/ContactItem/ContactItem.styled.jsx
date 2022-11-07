import styled from 'styled-components';
import { RiUserFollowLine } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

export const IconUser = styled(RiUserFollowLine)`
  padding: 4px;
  border: 1px solid #66abe7;
  border-radius: 50%;
  margin-right: 10px;
  color: #4287f5;
  cursor: pointer;
  transition: color 250ms linear;

  :hover {
    color: #fff;
  }
`;
export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #242323;
  font-size: 30px;
  border: none;

  background-color: transparent;
  transition: all 100ms linear;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
