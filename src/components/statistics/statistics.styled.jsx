import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`;

export const Label = styled.span`
  margin-bottom: 7px;
  font-size: 12px;
  color: ${props => props.theme.colors.whiteTextcolor};
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.whiteTextcolor};
`;
