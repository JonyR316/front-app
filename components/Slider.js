// components/Slider.js
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  width: 90vw; // 10% menos que el ancho completo
  height: 90vh; // 10% menos que la altura completa
  position: relative;
  margin: 10px auto; // Centra el slider horizontalmente
  overflow: hidden; // Oculta cualquier contenido que sobresalga
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1; // Asegura que el texto esté sobre la imagen
`;

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 3000, // Transición cada 3 segundos
    fade: true, // Transición de fundido entre imágenes
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <SlideImage src={image.src} alt={`Slide ${index + 1}`} />
            <SlideText>{image.text}</SlideText>
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
