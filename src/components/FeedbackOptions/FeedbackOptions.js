import PropTypes from 'prop-types';
import React from 'react';

const FeedbackButton = ({ feedback, onFeedbackLeave }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onFeedbackLeave}>
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ stats, onFeedbackLeave }) => {
  return stats.map(stat => (
    <FeedbackButton feedback={stat} onFeedbackLeave={onFeedbackLeave} />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedbackLeave: PropTypes.func.isRequired,
};

export default FeedbackOptions;
