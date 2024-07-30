// components/Footer.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaShippingFast,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;

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
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </SocialIcons>
      <InfoSection>
        <InfoItem>
          <FaShippingFast />
          <span>Envío Gratis</span>
        </InfoItem>
        <InfoItem>
          <FaMapMarkerAlt />
          <span>Dirección: Calle Ejemplo 123</span>
        </InfoItem>
        <InfoItem>
          <FaPhoneAlt />
          <span>Contacto: +123 456 7890</span>
        </InfoItem>
      </InfoSection>
    </FooterContainer>
  );
};

export default Footer;
