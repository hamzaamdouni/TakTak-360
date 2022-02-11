import styled from "styled-components";

export const FirstSectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
  @media screen and (max-width: 786px) {
    justify-content: center;
  }
`;

export const FirstSectionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ContactUSContainer = styled.div`
  z-index: 3;
  height: 70vh;
  width: 400px;
  background: black;
  margin-top: 60px;
  opacity: 0.85;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10%;
  @media screen and (max-width: 786px) {
    margin-right: 0%;
    width: 90%;
    height: 60vh;
  }
`;

export const ContactUSTitle = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
`;
export const ContactUSTitleH1 = styled.h1`
  z-index: 4;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 5px;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  line-height: 1.2;
  color: white;
`;
export const ContactUSTitleDes = styled.span`
  z-index: 4;
  font-size: 15px;
  color: white;
  font-weight: 400;
  line-height: 1.2;
`;
export const ContactUSForm = styled.form`
  width: 90%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
`;

export const ContactUSFormBox = styled.div`
  width: 100%;
  height: 30px;
  margin: 15px 0;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;
export const ContactUSFormInput = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  background: #3a3a3a;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  :focus {
    border-color: #efa51f;
    background-color: #fff;
  }
  :valid {
    border-color: #efa51f;
    background-color: #fff;
  }
`;
export const ContactUSFormLabel = styled.label`
  position: absolute;
  left: 18px;
  top: 50%;
  color: white;
  font-size: 15px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  ${ContactUSFormInput}:focus ~ & {
    top: -10px;
    left: 12px;
    display: 14px;
    color: #efa51f;
  }
  ${ContactUSFormInput}:valid ~ & {
    top: 5;
    left: 12px;
    display: 14px;
    color: #efa51f;
  }
`;
export const ContactUSFormMsgBox = styled.div`
  min-height: 100px;
  width: 100%;
  position: relative;
  margin: 15px 0;
`;
export const ContactUSFormTextArea = styled.textarea`
  position: absolute;
  height: 100%;
  width: 100%;
  resize: none;
  background: #3a3a3a;
  border: 2px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: all 0.3s ease;

  :focus {
    border-color: #efa51f;
    background-color: #fff;
  }
`;

export const ContactUSFormLabelMsg = styled.label`
  position: absolute;
  font-size: 16px;
  color: white;
  left: 18px;
  top: 6px;
  pointer-events: none;
  transition: all 0.3s ease;
  ${ContactUSFormTextArea}:focus ~ & {
    top: -20px;
    left: 12px;
    display: 14px;
    color: #efa51f;
  }
  ${ContactUSFormTextArea}:valid ~ & {
    top: -15;
    left: 12px;
    display: 14px;
    color: #efa51f;
  }
`;
export const ContactUSFormSubmit = styled.input.attrs({ type: "submit" })`
  color: #fff;
  width: 100%;
  background: #efa51f;
  border: 2px solid #efa51f;
  padding-left: 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  :hover {
    background-color: transparent;
    color: #efa51f;
  }
`;
