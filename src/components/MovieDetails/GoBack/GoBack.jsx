import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './GoBack.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
