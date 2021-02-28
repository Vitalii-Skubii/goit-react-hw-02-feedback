import PropTypes from 'prop-types';

const Notification = ({ notificat }) => <p>{notificat}</p>;

Notification.propTypes = {
  notificat: PropTypes.string.isRequired,
};

export default Notification;
