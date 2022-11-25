import { RotatingLines } from 'react-loader-spinner';
import { SectionLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <SectionLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </SectionLoader>
  );
};
