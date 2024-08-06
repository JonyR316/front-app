import React from "react";
import {
  FaShippingFast,
  FaStore,
  FaLock,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: white;
  color: #222;
  padding: 3px;
  text-align: center;
  border-top: 1px solid black; /* Línea delgada en la parte superior */
  border-bottom: 1px solid black;
  margin-top: 30px; /* Permite que el footer se mantenga en la parte inferior */
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  font-size: 13px;
  width: 150px; /* Ancho fijo para alineación */
`;

const InfoText = styled.div`
  margin-top: 5px; /* Espacio entre el título y el párrafo */
`;

const IconWrapper = styled.div`
  font-size: 2rem; /* Tamaño del icono */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InfoSection>
        <InfoItem>
          <IconWrapper>
            <FaShippingFast size={40} />
          </IconWrapper>
          <span>
            <b>Envío Gratis</b>
          </span>
          <InfoText>Envío gratuito por tus compras</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <FaStore size={34} />
          </IconWrapper>
          <span>
            <b>Reserva en Línea</b>
          </span>
          <InfoText>Reserva tus productos en nuestra tienda online</InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <FaMapMarkerAlt size={32} />
          </IconWrapper>
          <span>
            <b>Tienda Física</b>
          </span>
          <InfoText>
            Visítanos y recoge tus compras en nuestra tienda física
          </InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <FaLock size={32} />
          </IconWrapper>
          <span>
            <b>Compra Segura</b>
          </span>
          <InfoText>
            Tu compra siempre será 100% segura en nuestro sitio
          </InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <FaCreditCard size={32} />
          </IconWrapper>
          <span>
            <b>Formas de Pago</b>
          </span>
          <InfoText>
            Tarjeta de crédito o débito, transferencia bancaria.
          </InfoText>
        </InfoItem>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;
