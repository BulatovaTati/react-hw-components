import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.bcgTable};
  border-bottom: 2px solid ${props => props.theme.colors.NavBGColor};
  text-align: center;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: ${props => props.theme.fontSizes[3]}px;
  padding: 5px 10px;
  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 5px;
  outline: none;
  width: 80%;

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.NavBGColor};
  }
`;
