import React from "react";
import Image from "../../Assets/UnderConstruction.svg";
import {
  UnderConstructionImg,
  UnderConstructionTitle,
  UnderConstructionWrapper,
} from "./UnderConstructionElements";

const UnderConstruction = () => {
  return (
    <UnderConstructionWrapper>
      <UnderConstructionImg src={Image} />
      <UnderConstructionTitle>Under Construction</UnderConstructionTitle>
    </UnderConstructionWrapper>
  );
};

export default UnderConstruction;
