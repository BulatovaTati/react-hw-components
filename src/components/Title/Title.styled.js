import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  text-align: center;
  color: ${props => props.color};
`;
