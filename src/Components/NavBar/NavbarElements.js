import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.nav`
  background: black;
  height: 60px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: 60px;
  z-index: 11;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  text-decoration: none;
`;

export const NavBarlogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const NavBarImg = styled.img`
  width: 140px;
  height: auto;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #efa51f;
  }
`;

export const NavBarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;
export const NavBarItem = styled.li`
  height: 80px;
`;

export const NavBarLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3.5px solid #efa51f;
    color: #efa51f;
  }
`;
