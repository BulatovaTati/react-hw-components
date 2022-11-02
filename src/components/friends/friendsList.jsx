import PropTypes from 'prop-types';
import {
  Container,
  FriendsList,
  Item,
  Status,
  Avatar,
  FriendName,
} from './friendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <Item key={id}>
            <Status style={{ color: friendOnline(isOnline) }}>●</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </Item>
        ))}
      </FriendsList>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}
