import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin: 0 auto;
  width: 200px;
  height: 50px;
  padding: 14px 28px;
  border-radius: 10.3108px;
  background-color: #5736a3;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #ebd8ff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #471ca9;
  }
`;
