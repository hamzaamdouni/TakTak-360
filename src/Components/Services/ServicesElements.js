import styled from "styled-components";

export const ServicesContainer = styled.div`
  color: #fff;
  background: black;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 5px;
    height: auto;
  }
`;
export const ServicesContainerTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ServicesContainerTitleH1 = styled.h1`
  width: 80%;
  height: 15%;
  text-align: center;
  color: #efa51f;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
export const ServicesContainerCards = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  margin-top: 5%;
  align-items: center;
  justify-content: space-around;
`;
export const ServicesContentCards = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
