import { useState, useEffect } from "react";
import { getUsers, updateFollowers } from "../../services/usersApi";
import { ListContainer, NotFoundInfo } from "./CardList.styled";
import { filterUsers } from "../../utils/filterUsers";
import TweetCard from "../TweetCard/TweetCard";
import Button from "../Button/Button";
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

  const filteredUsers = filterUsers(users, filter, followingUsers);

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

  return (
    <>
      {users.length > 0 && (
        <>
          <Filter filterChange={filterChange} />
          {(filter === "follow" || filter === "followings") && (
            <p>
              We have filtered out all uploaded users. You can load more users
              in the mode "show all". If the button "Load more" is missing, then
              you have downloaded all users.
            </p>
          )}
          {filteredUsers.length === 0 && (
            <NotFoundInfo>
              We did not find any users with choosed state.
            </NotFoundInfo>
          )}
          <ListContainer>
            {filteredUsers.map(({ id, user, tweets, followers, avatar }) => (
              <TweetCard
                key={id}
                id={id}
                user={user}
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
      {!isLoading && users.length > 0 && page < 7 && filter === "all" && (
        <Button onClick={handlePageChange} text="Load more" />
      )}
    </>
  );
};

export default CardsList;
