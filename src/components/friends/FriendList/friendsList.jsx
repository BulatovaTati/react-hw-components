import PropTypes from 'prop-types';
import { Container, FriendsList } from './friendsList.styled';
import { FriendListItem } from '../FriendListItem/friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
