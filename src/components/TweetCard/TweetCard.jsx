import PropTypes from "prop-types";
import { TweetCardContainer } from "./TweetCard.styled";
import { formatNumber } from "../../utils/formatNumber";

const TweetCard = ({
  id,
  user,
  tweets,
  followers,
  avatar,
  followingUsers,
  handleFollow,
  handleUnfollow,
}) => {
  return (
    <TweetCardContainer>
      <div className="avatar">
        <img src={avatar} alt={user}></img>
      </div>
      <p className="cardText tweets">{tweets} tweets</p>
      <p className="cardText followers">{formatNumber(followers)} Followers</p>
      {followingUsers.includes(id) ? (
        <button
          className="cardBtn followingBtn"
          type="button"
          onClick={() => handleUnfollow(id)}
        >
          Following
        </button>
      ) : (
        <button
          className="cardBtn followBtn"
          type="button"
          onClick={() => handleFollow(id)}
        >
          Follow
        </button>
      )}
    </TweetCardContainer>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  followingUsers: PropTypes.array.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
};

export default TweetCard;
