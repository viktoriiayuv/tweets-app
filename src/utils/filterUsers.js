export const filterUsers = (users, filter, followingUsers) => {
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
