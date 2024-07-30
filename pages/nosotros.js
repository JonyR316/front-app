// pages/nosotros.js
import React from "react";
import ImageSlider from "@/components/Slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Nosotros = () => {
  const images = [
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721227123346.png",
      text: "Texto sobre imagen 1",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1722311337254.jpeg",
      text: "Texto sobre imagen 2",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721666179779.jpeg",
      text: "Texto sobre imagen 3",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721218579493.jpg",
      text: "Texto sobre imagen 4",
    },
  ];

  return (
    <>
      <Header />
      <ImageSlider images={images} />
      <Footer />
    </>
  );
};

export default Nosotros;
