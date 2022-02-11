import styled from "styled-components";

export const MaterielContainer = styled.div`
  color: #000;
  background: #fff;
  height: 90vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MaterielContainerImg = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MaterielImage = styled.img`
  height: 90%;
  width: auto;
`;

export const MaterielContainerParagraphe = styled.div`
  background-color: "#BFBFBF";
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MaterielParagrapheTitle = styled.h1`
  width: 80%;
  color: #efa51f;
`;
export const MaterielParagrapheDesc = styled.p`
  width: 80%;
  text-align: justify;
  font-weight: bold;
`;
export const MaterielPropietyContent = styled.div`
  width: 80%;
  margin-bottom: 15px;
`;
export const MaterielPropietySpan = styled.span`
  width: 80%;
  padding-left: 10px;
  text-align: justify;
`;
