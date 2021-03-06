import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ notificat }) => <p className={styles.p}>{notificat}</p>;

Notification.propTypes = {
  notificat: PropTypes.string.isRequired,
};

export default Notification;
