import { useState, useEffect } from "react";
import { TweetCardContainer } from "./TweetCard.styled";
import hansel from "../../img/hansel.png";

const TweetCard = ({
  id,
  tweets,
  followers,
  avatar,
  handleFollowersChange,
}) => {
  const [followingUsers, setFollowingUsers] = useState(
    () => JSON.parse(localStorage.getItem("followingUsers")) || []
  );

  useEffect(() => {
    localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
  }, [followingUsers]);

  const handleBtnFollowingClick = (id) => {
    setFollowingUsers((prevStage) =>
      prevStage.filter((userId) => userId !== id)
    );
    handleFollowersChange(id, -1);
  };

  const handleBtnFollowClick = (id) => {
    setFollowingUsers((prevStage) => [...prevStage, id]);
    handleFollowersChange(id, 1);
  };

  return (
    <TweetCardContainer>
      <div className="avatar">
        <img src={avatar}></img>
      </div>
      <p className="cardText tweets">{tweets} tweets</p>
      <p className="cardText followers">{followers} Followers</p>
      {followingUsers.includes(id) ? (
        <button
          className="cardBtn"
          type="button"
          onClick={() => handleBtnFollowingClick(id)}
        >
          Following
        </button>
      ) : (
        <button
          className="cardBtn"
          type="button"
          onClick={() => handleBtnFollowClick(id)}
        >
          Follow
        </button>
      )}
    </TweetCardContainer>
  );
};

export default TweetCard;
