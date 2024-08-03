import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Center from "./Center";

const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 20px;

  .slick-slide {
    position: relative;
    text-align: center;
    transition: transform 0.5s ease-in-out;
  }

  .slick-center {
    transform: scale(1.1);
    z-index: 1;
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

const SlideImage = styled(motion.img)`
  width: 90%;
  height: 400px;
  object-fit: cover;
  margin: auto;
  border: 10px;
  border-radius: 10px;
`;

const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Center>
      <SliderContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <SlideImage
                src={image.src}
                alt={`Slide ${index + 1}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </Center>
  );
};

export default ImageSlider;
