import { useNavigate } from "react-router-dom";
import CardsList from "../../components/CardsList/CardsList";
import Button from "../../components/Button/Button";

const TweetsPage = () => {
  const navigator = useNavigate();
  return (
    <>
      <Button text="Back" onClick={() => navigator("/")} />
      <CardsList />
    </>
  );
};

export default TweetsPage;
