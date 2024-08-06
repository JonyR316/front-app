import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  margin-top: px;
`;

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid black; /* Línea delgada en la parte superior */
  margin-top: 30px; /* Permite que el footer se mantenga en la parte inferior */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 10px;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  font-size: 13px;
  width: 150px; /* Ancho fijo para alineación */
`;

const InfoText = styled.div`
  margin-top: 10px; /* Espacio entre el título y el párrafo */
`;
const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px; // Espacio de 20px entre la parte izquierda y derecha
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: 20px; // Espacio de 20px entre la parte derecha y el borde del contenedor
`;

const FooterU = () => {
  return (
    <FooterContainer>
      <Container>
        <LeftContent></LeftContent>
        <RightContent>
          <InfoText>
            <span>
              <b>ENCUENTRANOS TAMBIEN EN</b>
            </span>
          </InfoText>
          <SocialIcons>
            <a
              href="https://www.facebook.com/profile.php?id=100066712185951"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </SocialIcons>
        </RightContent>
      </Container>
    </FooterContainer>
  );
};

export default FooterU;
