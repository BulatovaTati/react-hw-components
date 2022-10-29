import styles from './friends.module.css';
import PropTypes from 'prop-types';

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

 export const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friend__list}>
        {friends.map(({id, isOnline, avatar, name}) => (
          <li className={styles.item} key={id}>
            <span
              className={styles.status}
              style={{ color: friendOnline(isOnline) }}
            >
               {' '}
              ●
            </span>
            <img
              className={styles.avatar}
              src={avatar}
              alt='User avatar'
              width="48"
            />
            <p className={styles.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
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

 