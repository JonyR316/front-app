import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin: 20px 0 10px;
  font-weight: 500;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>ARTICULOS RECIENTES</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
