import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  color: #fff;
  background: "#BFBFBF";
  height: 90vh;

  @media screen and (max-width: 768px) {
    margin-top: 5px;
    height: 80vh;
  }
`;
export const InfoSectionContent = styled.div`
  color: #000;
  background: "#BFBFBF";
  height: 100%;
  width: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoSectionParagraphe = styled.div`
  background-color: "#BFBFBF";
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InfoParagrapheTitle = styled.h1`
  width: 80%;
  text-align: center;
  color: #efa51f;
`;
export const InfoParagrapheDesc = styled.p`
  width: 80%;
  text-align: justify;
`;

export const InfoSectionImg = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoImage = styled.img`
  height: 50%;
  width: 80%;
`;
