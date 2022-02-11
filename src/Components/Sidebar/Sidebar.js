import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            {" "}
            Accueil{" "}
          </SidebarLink>
          <SidebarLink to="/immobilier" onClick={toggle}>
            {" "}
            Immobilier
          </SidebarLink>
          <SidebarLink to="/loisir" onClick={toggle}>
            {" "}
            Loisir
          </SidebarLink>
          <SidebarLink to="/event" onClick={toggle}>
            {" "}
            Évènementiel{" "}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
