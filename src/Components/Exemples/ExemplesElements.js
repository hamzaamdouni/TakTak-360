import styled from "styled-components";

export const ExemplesContainer = styled.div`
  color: #fff;
  background: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ExemplesContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;

export const ExemplesContainerTitleH1 = styled.h1`
  width: 60%;
  height: 20%;
  text-align: center;
  color: #efa51f;
  @media screen and (max-width: 768px) {
  }
  width: 90%;
`;

export const ExemplesContainerBody = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    flex: direction:column;
    flex-wrap : wrap;
  }
`;

export const ExemplesContainerBodyFrame = styled.iframe`
  width: 460px;
  height: 100%;
  border: none;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 30%;
    flex-wrap: wrap;
    padding-bottom: 3%;
  }
`;
