import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onFeedbackLeave, id }) => {
  return (
    <button
      className={styles.btn}
      type="button"
      data-feedback={feedback}
      onClick={onFeedbackLeave}
      key={id}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ stats, onFeedbackLeave }) => {
  return stats.map(stat => (
    <FeedbackButton
      feedback={stat}
      onFeedbackLeave={onFeedbackLeave}
      id={stats.indexOf(stat)}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedbackLeave: PropTypes.func.isRequired,
};

export default FeedbackOptions;
