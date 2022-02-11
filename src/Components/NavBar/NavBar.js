import React from "react";
import Logo from "../../Assets/Logo.png";
import { VscThreeBars } from "react-icons/vsc";

import {
  MobileIcon,
  NavBarContainer,
  NavBarImg,
  NavBarItem,
  NavBarLinks,
  NavBarlogo,
  NavBarMenu,
  NavContainer,
} from "./NavbarElements";

const NavBar = ({ toggle, setEspace }) => {
  return (
    <NavContainer>
      <NavBarContainer>
        <NavBarlogo to="/">
          <NavBarImg src={Logo} />
        </NavBarlogo>
        <MobileIcon onClick={toggle}>
          <VscThreeBars />
        </MobileIcon>
        <NavBarMenu>
          <NavBarItem>
            <NavBarLinks
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-75}
            >
              Accueil
            </NavBarLinks>
          </NavBarItem>
          <NavBarItem>
            <NavBarLinks
              to="/immobilier"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-75}
            >
              Immobilier
            </NavBarLinks>
          </NavBarItem>
          <NavBarItem>
            <NavBarLinks
              to="/loisir"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-75}
            >
              Loisir
            </NavBarLinks>
          </NavBarItem>
          <NavBarItem>
            <NavBarLinks
              to="/event"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-75}
            >
              Évènementiel
            </NavBarLinks>
          </NavBarItem>
        </NavBarMenu>
      </NavBarContainer>
    </NavContainer>
  );
};

export default NavBar;
