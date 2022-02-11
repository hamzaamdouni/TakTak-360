import React from "react";
import matterport from "../../Assets/matterport-pro2.png";
import { BiCaretRight } from "react-icons/bi";
import {
  MaterielContainer,
  MaterielContainerImg,
  MaterielContainerParagraphe,
  MaterielImage,
  MaterielParagrapheDesc,
  MaterielParagrapheTitle,
  MaterielPropietyContent,
  MaterielPropietySpan,
} from "./MaterielElements";

const Materiel = () => {
  return (
    <MaterielContainer>
      <MaterielContainerImg>
        <MaterielImage src={matterport} />
      </MaterielContainerImg>

      <MaterielContainerParagraphe>
        <MaterielParagrapheTitle>Matterport Pro2 </MaterielParagrapheTitle>
        <MaterielParagrapheDesc>
          la référence en matière d'imagerie haute résolution, de haute
          précision et de vitesse de capture rapide
        </MaterielParagrapheDesc>
        <MaterielPropietyContent>
          <BiCaretRight color="#efa51f" />
          <MaterielPropietySpan>
            Pour les professionnels des secteurs du marketing immobilier, de la
            construction et des assurances qui ont besoin d'une précision et
            d'une résolution d'image élevées
          </MaterielPropietySpan>
        </MaterielPropietyContent>

        <MaterielPropietyContent>
          <BiCaretRight color="#efa51f" />
          <MaterielPropietySpan>
            Résolution d'image de qualité professionnelle @ 134 MP + données de
            profondeur 3D
          </MaterielPropietySpan>
        </MaterielPropietyContent>

        <MaterielPropietyContent>
          <BiCaretRight color="#efa51f" />
          <MaterielPropietySpan>
            Batterie puissante pour une numérisation toute la journée Actifs
            dérivés disponibles (plans d'étage, photos prêtes à imprimer et
            MatterPak™)
          </MaterielPropietySpan>
        </MaterielPropietyContent>
      </MaterielContainerParagraphe>
    </MaterielContainer>
  );
};

export default Materiel;
