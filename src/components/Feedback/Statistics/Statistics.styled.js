import styled from 'styled-components';
import { GrStatusGood } from 'react-icons/gr';
import { MdMoodBad } from 'react-icons/md';
import { BsEmojiNeutral } from 'react-icons/bs';

export const List = styled.ul`
  max-width: 400px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.bcgTable};
  border-radius: 10px;
`;

export const Item = styled.li`
  padding: 7px 15px;
  display: flex;
  align-items: center;

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
export const IconGood = styled(GrStatusGood)`
  margin-right: 5px;
`;
export const IconBad = styled(MdMoodBad)`
  margin-right: 5px;
  font-size: 17px;
`;

export const IconNeutral = styled(BsEmojiNeutral)`
  margin-right: 5px;
  font-size: 16px;
`;
