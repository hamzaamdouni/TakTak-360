import React, { useState } from "react";
import Video from "../../Assets/BgVideo.mp4";
import {
  ContactUSContainer,
  ContactUSForm,
  ContactUSFormBox,
  ContactUSFormInput,
  ContactUSFormLabel,
  ContactUSFormLabelMsg,
  ContactUSFormMsgBox,
  ContactUSFormSubmit,
  ContactUSFormTextArea,
  ContactUSTitle,
  ContactUSTitleDes,
  ContactUSTitleH1,
  FirstSectionBg,
  FirstSectionContainer,
  VideoBg,
} from "./FirstSectionElements";

const FirstSection = () => {
  const [reclam, setReclamation] = useState({
    nom: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleReclamation = (e) => {
    setReclamation({ ...reclam, [e.target.name]: e.target.value });
  };
  return (
    <FirstSectionContainer>
      <FirstSectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </FirstSectionBg>
      <ContactUSContainer>
        <ContactUSTitle>
          <ContactUSTitleH1>Laissez-nous vous appeler !</ContactUSTitleH1>
          <ContactUSTitleDes>
            Pour vous aider à choisir votre bien
          </ContactUSTitleDes>
        </ContactUSTitle>
        <ContactUSForm>
          <ContactUSFormBox>
            <ContactUSFormInput
              type="text"
              required
              name="nom"
              value={reclam.nom}
              onInput={handleReclamation}
            ></ContactUSFormInput>
            <ContactUSFormLabel> Nom et prenom </ContactUSFormLabel>
          </ContactUSFormBox>
          <ContactUSFormBox>
            <ContactUSFormInput
              type="text"
              required
              name="phone"
              value={reclam.phone}
              onInput={handleReclamation}
            ></ContactUSFormInput>
            <ContactUSFormLabel> Phone</ContactUSFormLabel>
          </ContactUSFormBox>

          <ContactUSFormBox>
            <ContactUSFormInput
              type="text"
              required
              name="email"
              value={reclam.email}
              onInput={handleReclamation}
            ></ContactUSFormInput>
            <ContactUSFormLabel> Email</ContactUSFormLabel>
          </ContactUSFormBox>
          <ContactUSFormMsgBox>
            <ContactUSFormTextArea
              required
              name="message"
              value={reclam.message}
              onInput={handleReclamation}
            />
            <ContactUSFormLabelMsg>Message</ContactUSFormLabelMsg>
          </ContactUSFormMsgBox>
          <ContactUSFormBox>
            <ContactUSFormSubmit type="submit" defaultValue="Send Message" />
          </ContactUSFormBox>
        </ContactUSForm>
      </ContactUSContainer>
    </FirstSectionContainer>
  );
};

export default FirstSection;
