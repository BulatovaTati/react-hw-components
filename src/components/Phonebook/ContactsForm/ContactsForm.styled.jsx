import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.bcgTable};
  border-bottom: 2px solid ${props => props.theme.colors.borderBot};
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

  :hover,
  :focus {
    border-color: ${props => props.theme.colors.borderBot};
  }
`;

export const Button = styled.button`
  min-width: 120px;
  padding: 10px 20px;
  border: none;
  border: 1px solid transparent;

  font-size: ${props => props.theme.fontSizes[3]}px;
  color: ${props => props.theme.colors.whiteTextColor};
  background-color: ${props => props.theme.colors.bcgBtn};
  text-align: center;

  transition: all 250ms linear;
  cursor: pointer;
  border-radius: 10px;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    border: 1px solid ${props => props.theme.colors.bcgBtn};
    color: ${props => props.theme.colors.bcgBtn};
    background-color: ${props => props.theme.colors.whiteTextColor};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: ${props => props.theme.fontSizes[1]}px;
  color: red;
`;
