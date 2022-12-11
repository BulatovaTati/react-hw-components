import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 25px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 25px;

  ::-webkit-scrollbar-thumb {
    background: #64b5f6;
    border-radius: 15px;
  }

  ::-webkit-scrollbar {
    height: 15px;
    background: transparent;
  }
  @media (max-width: 560px) {
    ::-webkit-scrollbar-thumb {
      background: none;
    }
  }
`;

export const Item = styled.li`
  margin: 0 15px;
  min-width: 250px;
  border: 1px solid #0101011a;
  box-shadow: rgb(1 1 1 / 10%) 0px 1px 10px 5px;
  padding-bottom: 40px;
  border-radius: 15px;
  display: flex;
  background-color: white;
  flex-direction: column;
  transition: transform 0.5s ease;
  scroll-snap-align: start;

  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
  }

  span {
    font-weight: 600;
    margin-top: 15px;
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 875px) {
    min-width: 180px;
  }
`;
