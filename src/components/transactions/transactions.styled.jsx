import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  max-width: 860px;
  background-color: ${props => props.theme.colors.whiteTextcolor};
  margin: 0;
  padding: 0;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.whiteTextcolor};
`;

export const Th = styled.th`
  padding: 16px 0;
  border-right: 1px solid ${props => props.theme.colors.whiteTextcolor};
  text-transform: uppercase;
  font-weight: normal;

  &:last-child {
    border-right: none;
  }
`;

export const Td = styled.td`
  padding: 16px;
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
