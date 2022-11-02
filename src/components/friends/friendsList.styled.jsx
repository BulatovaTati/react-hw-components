import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 130px;
  margin: ${props => props.theme.space[3]}px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.shadow.boxShadow};

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const Status = styled.span`
  margin: 15px;
  font-size: 55px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.colors.borderColor};
  border-radius: 10px;
`;

export const FriendName = styled.p`
  margin-left: 18px;
  font-size: 28px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;
