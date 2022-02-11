import React from "react";
import ServiceCard from "./ServiceCard";
import {
  ServicesContainer,
  ServicesContainerCards,
  ServicesContainerTitle,
  ServicesContainerTitleH1,
  ServicesContentCards,
} from "./ServicesElements";

import { Card1, Card2, Card3, Card4 } from "./Data";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContainerTitle>
        <ServicesContainerTitleH1>
          CAPTUREZ VOS ESPACES
        </ServicesContainerTitleH1>
      </ServicesContainerTitle>
      <ServicesContainerCards>
        <ServicesContentCards>
          <ServiceCard {...Card1} />
          <ServiceCard {...Card2} />
          <ServiceCard {...Card3} />
          <ServiceCard {...Card4} />
        </ServicesContentCards>
      </ServicesContainerCards>
    </ServicesContainer>
  );
};

export default Services;
