import { Main } from 'components/Phonebook.styled';
import { TitleEl } from 'components/Title/Title';

const Home = () => {
  return (
    <Main>
      <TitleEl
        str="Welcome to your Phonebook App 🙌. 
        Please Sign up ✌ or Log ✔ in to get
        started."
      />
    </Main>
  );
};
export default Home;
