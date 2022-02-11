import React from "react";
import {
  ExemplesContainer,
  ExemplesContainerBody,
  ExemplesContainerBodyFrame,
  ExemplesContainerTitle,
  ExemplesContainerTitleH1,
} from "./ExemplesElements";

const Exemples = () => {
  return (
    <ExemplesContainer>
      <ExemplesContainerTitle>
        <ExemplesContainerTitleH1>
          OBTENEZ UNE DÉMONSTRATION 3D RAPIDEMENT ET À COÛT EFFICACE
        </ExemplesContainerTitleH1>
      </ExemplesContainerTitle>
      <ExemplesContainerBody>
        <ExemplesContainerBodyFrame src="https://my.matterport.com/show/?m=uVArvkjLkg1"></ExemplesContainerBodyFrame>
        <ExemplesContainerBodyFrame src="https://my.matterport.com/show/?m=JZZ6QKkfVta"></ExemplesContainerBodyFrame>
        <ExemplesContainerBodyFrame src="https://my.matterport.com/show/?m=H4vfBqbWCoT"></ExemplesContainerBodyFrame>
      </ExemplesContainerBody>
    </ExemplesContainer>
  );
};

export default Exemples;
