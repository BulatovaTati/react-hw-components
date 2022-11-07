import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 0;
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
