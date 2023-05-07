import styled from "styled-components";
import logo from "../../img/logo.png";
import picture from "../../img/picture21.png";
import rectangle from "../../img/rectangle.png";
import ellipse from "../../img/ellipse.png";

export const TweetCardContainer = styled.li`
  padding: 178px 0 36px 0;
  width: 380px;
  height: 460px;

  background: url(${logo}), url(${picture}), url(${rectangle}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-position: 20px 20px, 36px 28px, 0px 214px, 0px 0px;
  background-repeat: no-repeat;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  text-align: center;

  .cardText {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
  }

  .tweets {
    margin-bottom: 16px;
  }

  .followers {
    margin-bottom: 26px;
  }

  .cardBtn {
    margin: 0 auto;
    width: 196px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10.3108px;
    cursor: pointer;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background: #dbc8f0;
    }
  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 26px auto;
    width: 80px;
    height: 80px;
    background-color: #5736a3;
    background-image: url(${ellipse});
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
    border-radius: 50%;

    img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
    }
  }
`;
