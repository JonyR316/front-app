import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
`;

export default function ProductsPage() {
  return (
    <>
      <Header />
      <Center>
        <Title>TODOS LOS PRODUCTOS</Title>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  return {
    props: {
      products: await Product.find({}, {}),
    },
  };
}
