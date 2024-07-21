// pages/thank-you.js

import Header from "@/components/Header";
import Center from "@/components/Center";
import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-top: 40px;
  text-align: center;
`;

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <Center>
        <Box>
          <h1>! Gracias por su compra !</h1>
          <p>Su pedido ha sido recibido exitosamente.</p>
        </Box>
      </Center>
    </>
  );
}
