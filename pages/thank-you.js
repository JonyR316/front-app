import Header from "@/components/Header";
import Center from "@/components/Center";
import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-top: 40px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 0 10px #000;
  img {
    max-width: 300px;
    margin-top: 20px;
    box-shadow: 0 0 10px #000;
  }
`;

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <Center>
        <Box>
          <h1>¡Gracias por su compra!</h1>
          <p>Su pedido ha sido recibido exitosamente.</p>
          <img
            src="https://jony-next-commerce.s3.amazonaws.com/1721666179779.jpeg"
            alt="Imagen de carrito vacío"
          />
        </Box>
      </Center>
    </>
  );
}
