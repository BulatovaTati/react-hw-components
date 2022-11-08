import styled from 'styled-components';

export const List = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.bcgTable};
  border-radius: 10px;
`;

export const Item = styled.li`
  padding: 7px 15px;
  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
`;
export const Stars = styled.div`
  display: flex;
  align-items: center;
`;
export const Stats = styled.div`
  margin-left: ${props => props.theme.space[3]}px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;
