import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  box-shadow: 9px 3px 15px #000;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  height: 35px;
  justify-content: center;
  font-size: 2rem;
  margin: 20px;
  margin: 20px 400px 15px 0px;
  background-color: #2d3748;
  color: #fff;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>ARTICULOS RECIENTES</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
