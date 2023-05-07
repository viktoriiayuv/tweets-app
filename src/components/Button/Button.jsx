import PropTypes from "prop-types";
import { ButtonContainer } from "./Button.styled";

const Button = ({ onClick, text }) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
