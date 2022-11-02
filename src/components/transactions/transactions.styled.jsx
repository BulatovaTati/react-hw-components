import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  background-color: ${props => props.theme.colors.whiteTextcolor};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 860px;
  }
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.whiteTextcolor};
`;

export const Th = styled.th`
  padding: 16px 0;
  border-right: 1px solid ${props => props.theme.colors.whiteTextcolor};
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.normal};

  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  padding: ${props => props.theme.space[4]}px;
  border-bottom: 1px solid ${props => props.theme.colors.profileBorderColor};
  border-right: 1px solid ${props => props.theme.colors.profileBorderColor};
  text-align-last: center;
  color: ${props => props.theme.colors.greyColor};
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.tdBcgColor};
  }
`;
