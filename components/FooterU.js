import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styled from "styled-components";
import Center from "./Center";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const FooterContainer = styled.footer`
  background-color: #111;
  color: white;
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid black; /* Línea delgada en la parte superior */
  margin-top: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  margin-top: 20px;

  a {
    color: white;
    font-size: 30px;
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

const InfoText = styled.div``;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px; // Espacio de 20px entre la parte izquierda y derecha
  text-align: left; // Alinear texto a la izquierda
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: 20px; // Espacio de 20px entre la parte derecha y el borde del contenedor
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
const Titulof = styled.div`
  font-size: 20px;
`;
const Ultimo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 15px;
`;

const FooterU = () => {
  return (
    <FooterContainer>
      <Center>
        <Container>
          <LeftContent>
            <InfoText>
              <Titulof>
                <b>INFORMACION DE CONTACTO</b>
              </Titulof>
            </InfoText>
            <ContactItem>
              <FaPhoneAlt size={24} />
              <span>
                <b>Teléfono:</b> 02 5166 152
              </span>
            </ContactItem>
            <ContactItem>
              <FaMobileAlt size={26} />
              <span>
                <b>Celular:</b> 096 300 1034
              </span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope size={40} />
              <span>
                <b>Correo electrónico:</b> info@maquinasecuador.com /
                maquinas.ecuador1@gmail.com
              </span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt size={24} />
              <span>
                <b>Dirección:</b> Sector Edén del Valle. Calle A Quito y Simón
                Bolívar
              </span>
            </ContactItem>
          </LeftContent>
          <RightContent>
            <InfoText>
              <Titulof>
                <b>ENCUÉNTRANOS TAMBIÉN EN</b>
              </Titulof>
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
        <Ultimo>
          Copyright © 2024 MAQUITEXT Ecuador.Todos los derechos reservados.
        </Ultimo>
      </Center>
    </FooterContainer>
  );
};

export default FooterU;
