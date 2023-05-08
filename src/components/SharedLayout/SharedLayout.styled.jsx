import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 24px;
  margin-bottom: 28px;
  background-color: #5736a3;
  box-shadow: 0px 2px 5px #706f6f;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 12px 0;
  margin-right: 24px;
  font-size: 24px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  &.active {
    color: #ebd8ff;
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1270px;
  padding-left: 15px;
  padding-right: 15px;
`;
