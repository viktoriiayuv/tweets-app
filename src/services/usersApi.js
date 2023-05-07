import axios from "axios";

const ENDPOINT = "https://64523238bce0b0a0f73f3650.mockapi.io/users";

export async function getUsers(page = 1) {
  const response = await axios.get(`${ENDPOINT}?limit=3&page=${page}`);
  const users = await response.data;
  console.log(response);
  console.log(users);
  return users;
}

export async function updateFollowers(id, updatedUser) {
  const response = await axios.put(`${ENDPOINT}/${id}`, updatedUser);
  return response;
}
