import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.bcgTable};
  border-bottom: 2px solid ${props => props.theme.colors.NavBGColor};
  text-align: center;
  border-radius: 10px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto ${props => props.theme.space[4]}px;
  text-align: start;
  max-width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: ${props => props.theme.fontWeights.medium};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const Input = styled(Field)`
  font-size: ${props => props.theme.fontSizes[3]}px;
  padding: 5px 10px;
  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 5px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.NavBGColor};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: ${props => props.theme.fontSizes[1]}px;
  color: ${props => props.theme.colors.errorMessage};
`;
