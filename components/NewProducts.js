import styled from "styled-components";
import Center from "./Center";
import ProductBox from "@/components/ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin: 30px 0 20px;
  font-weight: 500;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>MAQUINAS RECIENTES</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}
