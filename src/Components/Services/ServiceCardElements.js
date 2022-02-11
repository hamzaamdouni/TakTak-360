import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  width: 20%;
  height: 260px;
  background: #181818;
  border-radius: 15px;
  color: #fff;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  margin: 1%;
  @media screen and (max-width: 768px) {
    width: 85%;
    margin-bottom: 65px;
  }
`;
export const ServiceCardImg = styled.img`
  width: 30%;
  display: block;
  margin-top: -60px;
  @media screen and (max-width: 768px) {
    width: 25%;
    margin-top: -40px;
  }
`;
export const ServiceCardTitle = styled.h1`
  text-align: center;
  color: #efa51f;
  font-weight: bold;
  font-size: 1.2em;
  width: 90%;
  margin: 32px 0px;
`;
export const ServiceCardDesc = styled.p`
  font-size: 1em;
  width: 90%;
  margin: 25px 0px;
`;
