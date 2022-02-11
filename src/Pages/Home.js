import React from "react";
import Exemples from "../Components/Exemples/Exemples";
import FirstSection from "../Components/FirstSection/FirstSection";
import InfoSection from "../Components/InfoSection/InfoSection";
import Materiel from "../Components/Materiel/Materiel";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <FirstSection />
      <InfoSection />
      <Services />
      <Materiel />
      <Exemples />
    </div>
  );
};

export default Home;
