import { TweetCardContainer } from "./TweetCard.styled";
import { formatNumber } from "../../utils/formatNumber";

const TweetCard = ({
  id,
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
        <img src={avatar}></img>
      </div>
      <p className="cardText tweets">{tweets} tweets</p>
      <p className="cardText followers">{formatNumber(followers)} Followers</p>
      {followingUsers.includes(id) ? (
        <button
          className="cardBtn"
          type="button"
          onClick={() => handleUnfollow(id)}
        >
          Following
        </button>
      ) : (
        <button
          className="cardBtn"
          type="button"
          onClick={() => handleFollow(id)}
        >
          Follow
        </button>
      )}
    </TweetCardContainer>
  );
};

export default TweetCard;
