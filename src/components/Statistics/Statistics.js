import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, goodFeegbackPercentage }) => {
  return (
    <>
      {total ? (
        <ul className={styles.list}>
          <li className={styles.listItem}>good:{good}</li>
          <li className={styles.listItem}>neutral:{neutral}</li>
          <li className={styles.listItem}>bad:{bad}</li>
          <li className={styles.listItem}>total:{total}</li>
          <li className={styles.listItem}>
            Positive feedback:{goodFeegbackPercentage}%
          </li>
        </ul>
      ) : (
        <Notification notificat="No feedback given" />
      )}
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Statistics;
