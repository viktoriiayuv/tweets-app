import { useState, useEffect } from "react";
import { getUsers, updateFollowers } from "../../services/usersApi";
import TweetCard from "../TweetCard/TweetCard";
import Button from "../Button/Button";
import { ListContainer } from "./CardList.styled";
import Loader from "../Loader/Loader";
import Filter from "../Filter/Filter";

const CardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [followingUsers, setFollowingUsers] = useState(
    () => JSON.parse(localStorage.getItem("followingUsers")) || []
  );

  useEffect(() => {
    localStorage.setItem("followingUsers", JSON.stringify(followingUsers));
  }, [followingUsers]);

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((users) => {
        if (page === 1) {
          setUsers(users);
          return;
        }
        setUsers((prevState) => [...prevState, ...users]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const handlePageChange = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleFollowersChange = (id, step) => {
    const changedUser = users.find((user) => user.id === id);
    changedUser.followers += step;
    console.log(changedUser);
    setUsers((prevState) => [...prevState], changedUser);
    updateFollowers(id, changedUser);
  };

  const handleFollow = (id) => {
    setFollowingUsers((prevStage) => [...prevStage, id]);
    handleFollowersChange(id, 1);
  };

  const handleUnfollow = (id) => {
    setFollowingUsers((prevStage) =>
      prevStage.filter((userId) => userId !== id)
    );
    handleFollowersChange(id, -1);
  };

  const filterChange = (filterText) => {
    setFilter(filterText);
  };

  const filterUsers = (users, filter, followingUsers) => {
    const unfollowedUsers = users.filter(
      (user) => !followingUsers.includes(user.id)
    );
    const followedUsers = users.filter((user) =>
      followingUsers.includes(user.id)
    );
    if (filter === "all") {
      return users;
    }
    if (filter === "follow") {
      return unfollowedUsers;
    }
    if (filter === "followings") {
      return followedUsers;
    }
  };

  const filteredUsers = filterUsers(users, filter, followingUsers);

  return (
    <>
      {users.length > 0 && (
        <>
          <Filter filterChange={filterChange} />
          <ListContainer>
            {filteredUsers.map(({ id, tweets, followers, avatar }) => (
              <TweetCard
                key={id}
                id={id}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                followingUsers={followingUsers}
                handleFollow={handleFollow}
                handleUnfollow={handleUnfollow}
              />
            ))}
          </ListContainer>
        </>
      )}
      {isLoading && <Loader />}
      {!isLoading && users.length > 0 && page < 7 && (
        <Button onClick={handlePageChange} text="Load more" />
      )}
    </>
  );
};

export default CardsList;
