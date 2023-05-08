import { HomePageContainer } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Tweets App</h1>
      <p>Three easy steps to use this application: </p>
      <ul>
        <li>Go to page Tweets</li>
        <li>View user profiles</li>
        <li>Follow other users</li>
      </ul>
    </HomePageContainer>
  );
};

export default HomePage;
