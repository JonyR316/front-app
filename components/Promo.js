import styled, { keyframes } from "styled-components";
import Center from "./Center";

const StyledHeader = styled.div`
  background-color: transparent;
  margin-top: 10px;

  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center; /* Asegura que todos los elementos estén alineados en el centro verticalmente */
`;

const blink = keyframes`
  0% { color: blue; }
  33% { color: black; }
  66% { color: white; }
  100% { color: blue; }
`;

const Title = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Asegura que el título ocupe todo el ancho disponible */
  height: 10px; /* Ajusta la altura del contenedor del título */
  animation: ${blink} 1s infinite; /* Aplica la animación */
  font-size: 1.6rem; /* Ajusta el tamaño de la fuente */
  padding: 10px; /* Añade padding para dar espacio alrededor del texto */
  text-align: center; /* Asegura que el texto esté centrado */

  svg {
    width: 24px; /* Ajusta el tamaño del icono */
    height: 24px; /* Ajusta el tamaño del icono */
    margin: 0 5px; /* Añade espacio entre el icono y el texto */
  }
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;

  img {
    width: 70px; // Ajusta el tamaño según sea necesario
    height: 70px; // Ajusta el tamaño según sea necesario
    object-fit: cover;

    border-radius: 10px;
    margin-right: 20px; // Espacio entre la imagen y el texto
    box-shadow: 9px 3px 15px #000;
  }
`;

export default function Promo() {
  return (
    <Center>
      <StyledHeader>
        <Wrapper>
          <Title>
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1722782799856.jpeg"
                  alt="Máquinas Importadas"
                />
              </a>
            </ImageBox>
            TE ASESORAMOS TOTALMENTE GRATIS..
            <ImageBox>
              <a href="#">
                <img
                  src="https://jony-next-commerce.s3.amazonaws.com/1722782799856.jpeg"
                  alt="Máquinas Importadas"
                />
              </a>
            </ImageBox>
          </Title>
        </Wrapper>
      </StyledHeader>
    </Center>
  );
}
