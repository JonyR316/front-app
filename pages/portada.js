import React from "react";
import ImageSlider from "@/components/Slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Center from "@/components/Center";

const Portada = () => {
  const images = [
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722363595045.png",
      text: "Texto sobre imagen 1",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722325880772.jpeg",
      text: "Texto sobre imagen 2",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722325892349.webp",
      text: "Texto sobre imagen 3",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722325910093.jpg",
      text: "Texto sobre imagen 4",
    },
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
};

export default Portada;
