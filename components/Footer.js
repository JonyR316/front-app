// components/Footer.js
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaShippingFast,
  FaStore,
  FaLock,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: transparent;
  color: black;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid black; /* Línea delgada en la parte superior */
  margin-top: 10px; /* Permite que el footer se mantenga en la parte inferior */
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

  a {
    color: black;
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
  margin-top: 4px; /* Espacio entre el título y el párrafo */
`;

const Footer = () => {
  return (
    <FooterContainer>
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
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt />
        </a>
      </SocialIcons>
      <InfoSection>
        <InfoItem>
          <FaShippingFast />
          <span>
            <b>Envío Gratis</b>
          </span>
          <InfoText>Envío gratuito por tus compras</InfoText>
        </InfoItem>
        <InfoItem>
          <FaStore />
          <span>
            <b>Reserva en Línea</b>
          </span>
          <InfoText>Reserva tus productos en nuestra tienda online</InfoText>
        </InfoItem>
        <InfoItem>
          <FaMapMarkerAlt />
          <span>
            <b>Tienda Física</b>
          </span>
          <InfoText>
            Visítanos y recoge tus compras en nuestra tienda física
          </InfoText>
        </InfoItem>
        <InfoItem>
          <FaLock />
          <span>
            <b>Compra Segura</b>
          </span>
          <InfoText>
            Tu compra siempre será 100% segura en nuestro sitio
          </InfoText>
        </InfoItem>
        <InfoItem>
          <FaCreditCard />
          <span>
            <b>Formas de Pago</b>
          </span>
          <InfoText>
            Elige entre diferentes formas de pago: Tarjeta de crédito o débito,
            transferencia bancaria.
          </InfoText>
        </InfoItem>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;
