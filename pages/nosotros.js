import React from "react";
import styled from "styled-components";
import FullImageSlider from "@/components/FullImageSlider";
import Center from "@/components/Center";
import Header from "@/components/Header";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  margin-top: 20px;
`;

const LeftContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 20px; // Espacio de 20px entre la parte izquierda y derecha
`;

const RightContent = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: 20px; // Espacio de 20px entre la parte derecha y el borde del contenedor
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const SectionTitleC = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center; // Centra el texto del título
`;
const SectionText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;

  img {
    width: 100px; // Ajusta el tamaño según sea necesario
    height: 100px; // Ajusta el tamaño según sea necesario
    object-fit: cover;

    border-radius: 10px;
    margin-right: 20px; // Espacio entre la imagen y el texto
    box-shadow: 9px 3px 15px #000;
  }
`;

const Nosotros = () => {
  const images = [
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721218579493.jpg",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg",
    },
    {
      src: "https://jony-next-commerce.s3.amazonaws.com/1721218579493.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Center>
        <Container>
          <LeftContent>
            <SectionTitle>Máquinas Nuevas</SectionTitle>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg"
                  alt="Máquinas Nuevas"
                />
              </a>
              <SectionText>
                Nuestras máquinas son 100% nuevas que garantizan la calidad del
                producto
              </SectionText>
            </ImageBox>
            <SectionTitle>Máquinas Importadas</SectionTitle>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg"
                  alt="Máquinas Importadas"
                />
              </a>
              <SectionText>
                Las máquinas vienen en selladas de fábrica y se abren frente al
                cliente en la entrega a domicilio o local
              </SectionText>
            </ImageBox>
            <SectionTitle>Accesorios Incluidos</SectionTitle>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg"
                  alt="Accesorios Incluidos"
                />
              </a>
              <SectionText>
                La entrega de las máquinas se realizan con todos los accesorios
                y repuestos de fábrica
              </SectionText>
            </ImageBox>
            <SectionTitle>Te asesoramos GRATIS en</SectionTitle>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg"
                  alt="Te asesoramos GRATIS en"
                />
              </a>
              <SectionText>
                Manejo y cuidado de las máquinas Mantenimiento preventivo y
                correctivo Elección de máquinas para tu necesidad Los mejores
                precios en máquinas, repuestos y accesorios
              </SectionText>
            </ImageBox>
            <SectionTitle>Precios de importador</SectionTitle>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1721226661407.jpg"
                  alt="Precios de importador"
                />
              </a>
              <SectionText>
                Los precios más bajos del mercado Garantía en nuestros productos
                La mejor atención al cliente
              </SectionText>
            </ImageBox>
          </LeftContent>
          <RightContent>
            <SectionTitleC>Contamos con 30 años de experiencia</SectionTitleC>
            <SectionText>
              Que nos permiten brindarte atención y asesoría personalizada Somos
              una empresa distribuidora de máquinas de coser y sus afines como
              servicio técnico, venta de repuestos y accesorios de toda clase de
              maquinaria para la industria textil.
            </SectionText>
            <SectionText>
              Tenemos 30 años de experiencia en el mercado y contamos con el
              conocimiento técnico de todas las marcas y modelos de máquinas de
              coser industriales. Nuestros servicios se ofrecen dentro de la
              ciudad de Quito, los valles.
            </SectionText>
            <FullImageSlider images={images} />
          </RightContent>
        </Container>
      </Center>
    </>
  );
};

export default Nosotros;
