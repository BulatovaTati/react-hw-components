import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 100%;
  min-height: 700px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const GengesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  padding: 0px 25px;
  color: #f8f8f8;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  border-radius: 10px;
  background: linear-gradient(to bottom, #00aec94d 20px, #39a0ede6 100%);
`;

export const Item = styled.li`
  padding: 5px;
`;

export const Img = styled.div`
  min-width: 450px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: 8px solid #fff;
  box-shadow: rgb(1 1 1 / 20%) 2px 2px 5px 0px,
    rgb(1 1 1 / 20%) -2px -2px 5px 0px;
  border-radius: 10px;
  width: 30%;
`;
