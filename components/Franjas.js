import styled, { keyframes } from "styled-components";
import Center from "./Center";

const StyledHeader = styled.div`
  background-color: #2d3748;
  margin-top: 10px;
  box-shadow: 18px 6px 30px 5px #000;
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
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Asegura que el título ocupe todo el ancho disponible */
  height: 40px; /* Ajusta la altura del contenedor del título */
  animation: ${blink} 1s infinite; /* Aplica la animación */
  font-size: 1.2rem; /* Ajusta el tamaño de la fuente */
  padding: 10px; /* Añade padding para dar espacio alrededor del texto */
  text-align: center; /* Asegura que el texto esté centrado */

  svg {
    width: 24px; /* Ajusta el tamaño del icono */
    height: 24px; /* Ajusta el tamaño del icono */
    margin: 0 5px; /* Añade espacio entre el icono y el texto */
  }
`;

export default function Franjas() {
  return (
    <Center>
      <StyledHeader>
        <Wrapper>
          <Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            GRANDES DESCUENTOS POR TUS COMPRAS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </Title>
        </Wrapper>
      </StyledHeader>
    </Center>
  );
}
