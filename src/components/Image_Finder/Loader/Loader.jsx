import { ThreeDots } from 'react-loader-spinner';
import { SectionLoader } from './Loader.styled';

const Loader = () => {
  return (
    <SectionLoader>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </SectionLoader>
  );
};

export default Loader;
