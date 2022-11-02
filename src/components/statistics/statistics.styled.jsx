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
  margin-bottom: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSize.xs}px;
  color: ${props => props.theme.colors.whiteTextcolor};
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSize.m}px;
  color: ${props => props.theme.colors.whiteTextcolor};
`;
