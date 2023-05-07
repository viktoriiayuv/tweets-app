import { useState, useEffect } from "react";
import { getUsers, updateFollowers } from "../../services/usersApi";
import TweetCard from "../TweetCard/TweetCard";
import Button from "../Button/Button";
import { ListContainer } from "./CardList.styled";

const CardsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (page === 1) {
      setUsers([]);
    }

    getUsers(page)
      .then((users) => {
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

  return (
    <>
      {users.length > 0 && (
        <ListContainer>
          {users.map(({ id, tweets, followers, avatar }) => (
            <TweetCard
              key={id}
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              handleFollowersChange={handleFollowersChange}
            />
          ))}
        </ListContainer>
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && users.length > 0 && page < 5 && (
        <Button onClick={handlePageChange} text="Load more" />
      )}
    </>
  );
};

export default CardsList;
