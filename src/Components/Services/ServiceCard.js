import React from "react";
import {
  ServiceCardContainer,
  ServiceCardDesc,
  ServiceCardImg,
  ServiceCardTitle,
} from "./ServiceCardElements";

const ServiceCard = ({ img, Title, description, alt }) => {
  return (
    <ServiceCardContainer>
      <ServiceCardImg src={img} alt={alt} />
      <ServiceCardTitle>{Title}</ServiceCardTitle>
      <ServiceCardDesc>{description}</ServiceCardDesc>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
