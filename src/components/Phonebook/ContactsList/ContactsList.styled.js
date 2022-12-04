import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${props => props.theme.space[5]}px;
  background-color: ${props => props.theme.colors.bcgTable};
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
`;

 