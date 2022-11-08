import styled from 'styled-components';

export const PageSection = styled.section`
  padding: ${props => props.theme.space[5]}px 0;
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes[5]}px;
  text-align: center;
`;
