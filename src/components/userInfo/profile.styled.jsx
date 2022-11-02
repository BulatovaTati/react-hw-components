import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 252px;
  border: 1px solid ${props => props.theme.colors.textColorProfile};
  border-radius: 4px;
`;

export const DescriptionContainer = styled.div`
  font-size: 15px;
  text-align: center;
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.textColorProfile};
`;

export const Avatar = styled.img`
  margin: 35px auto 0px auto;
  background-color: ${props => props.theme.colors.textColorProfile};
  border-radius: 50%;
  max-width: 100px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkBlueColor};
`;

export const Location = styled.p`
  margin: 10px auto 20px auto;
  font-size: 14px;
  color: ${props => props.theme.colors.darkBlueColor};
`;

export const Tag = styled.p`
  margin: 1px auto 10px auto;
  font-size: 14px;
  color: ${props => props.theme.colors.darkBlueColor};
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  text-align: center;
  background-color: ${props => props.theme.colors.profileBGColor};
`;

export const BoxInfo = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  width: 82px;
  font-size: 12px;
  color: ${props => props.theme.colors.textColorProfile};

  &:nth-of-type(2n) {
  border-right: 1px solid ${props => props.theme.colors.textColorProfile};
  border-left: 1px solid ${props => props.theme.colors.textColorProfile};
`;

export const Quantity = styled.span`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 700;
  color: ${props => props.theme.colors.darkBlueColor};
`;
