import PropTypes from 'prop-types';
import Notification from '../Notification';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total,
  goodFeegbackPercentage,
}) => {
  return (
    <>
      {total ? (
        <ul>
          <li>good:{good}</li>
          <li>neutral:{neutral}</li>
          <li>bad:{bad}</li>
          <li>total:{total}</li>
          <li>Positive feedback:{goodFeegbackPercentage}%</li>
        </ul>
      ) : (
        <Notification notificat="No feedback givet" />
      )}
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Statistics;
