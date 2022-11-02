import PropTypes from 'prop-types';
import {
  Container,
  StatsList,
  BoxInfo,
  Quantity,
  DescriptionContainer,
  Avatar,
  UserName,
  Tag,
  Location
} from './profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {

  return (

    <Container>

      <DescriptionContainer>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainer>

      <StatsList>
        <BoxInfo>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </BoxInfo>
        <BoxInfo>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </BoxInfo>
        <BoxInfo>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </BoxInfo>
      </StatsList>

    </Container>

  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};