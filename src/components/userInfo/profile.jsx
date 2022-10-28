import styles from './profile.module.css';
import PropTypes from 'prop-types';


export const Profile = ({ username, tag, location, avatar, stats }) => {
  
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img  className={styles.avatar}  src={avatar} alt="User avatar"/>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className  ={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};