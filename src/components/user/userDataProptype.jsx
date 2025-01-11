import PropTypes from "prop-types";

const userdataPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  displayPicture: PropTypes.string.isRequired,
  learningConversations: PropTypes.array,
  numberOfRatings: PropTypes.number,
  password: PropTypes.string,
  requestsReceived: PropTypes.array,
  reviews: PropTypes.array,
  skillsToLearn: PropTypes.array,
  skillsToTeach: PropTypes.array,
  teachingConversations: PropTypes.array,
  teachingRating: PropTypes.number,
  userSkills: PropTypes.array,
});

export default userdataPropType;