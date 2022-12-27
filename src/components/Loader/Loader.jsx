import { ThreeDots } from 'react-loader-spinner';
import { SectionLoader } from './Loader.styled';

export const Loader = () => (
  <SectionLoader>
    <ThreeDots
      height="150"
      width="150"
      radius="9"
      color="black"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </SectionLoader>
);
