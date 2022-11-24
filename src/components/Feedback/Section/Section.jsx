import PropTypes from 'prop-types';
import { TitleEl } from 'common/Title/Title';
import { PageSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <PageSection>
      {title && <TitleEl str={title} />}

      {children}
    </PageSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
