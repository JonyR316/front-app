import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 10px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 500px;
  }

  .slick-dots {
    bottom: 500px; // Posición de los puntos de navegación
  }
`;

const SlideImage = styled.img`
  width: 100%; // Ajusta la imagen al ancho del contenedor
  height: auto; // Mantiene la relación de aspecto de la imagen
  max-height: 500px; // Ajusta la altura máxima según sea necesario
  object-fit: cover; // Asegura que la imagen cubra el contenedor
`;

const FullImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Ajusta la velocidad del cambio de imagen
    arrows: true, // Muestra las flechas de navegación
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <SlideImage src={image.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default FullImageSlider;
