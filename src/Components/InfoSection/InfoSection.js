import React from "react";
import about from "../../Assets/about.svg";
import {
  InfoImage,
  InfoParagrapheDesc,
  InfoParagrapheTitle,
  InfoSectionContainer,
  InfoSectionContent,
  InfoSectionImg,
  InfoSectionParagraphe,
} from "./InfoSectionElements";

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <InfoSectionContent>
        <InfoSectionParagraphe>
          <InfoParagrapheTitle>
            La visite virtuelle pour se démarquer et gagner du temps
          </InfoParagrapheTitle>
          <InfoParagrapheDesc>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </InfoParagrapheDesc>
        </InfoSectionParagraphe>
        <InfoSectionImg>
          <InfoImage src={about} />
        </InfoSectionImg>
      </InfoSectionContent>
    </InfoSectionContainer>
  );
};

export default InfoSection;
