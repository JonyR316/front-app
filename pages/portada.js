import React from "react";
import ImageSlider from "@/components/Slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Center from "@/components/Center";

const Portada = () => {
  const images = [
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679542231.png",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679560430.png",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679572761.png",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679586328.png",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679606313.png",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722679623226.png",
    },
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
};

export default Portada;
