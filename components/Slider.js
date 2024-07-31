// components/Slider.js
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Center from "./Center";

const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 10px;

  .slick-slide {
    position: relative;
    text-align: center;
  }

  .slick-dots {
    display: none !important; // Oculta los puntos de navegación
  }

  .slick-prev,
  .slick-next {
    display: none !important; // Oculta las flechas de navegación
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 300px;
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
`;

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false, // Desactiva los puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Activa el desplazamiento automático
    autoplaySpeed: 3000, // Tiempo en milisegundos entre cada cambio de imagen (3 segundos)
  };

  return (
    <Center>
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
    </Center>
  );
};

export default ImageSlider;
