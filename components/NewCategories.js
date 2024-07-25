import styled from "styled-components";
import Center from "./Center";
import CategoryBox from "./CategoryBox";
import Title from "./Title";

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
`;

export default function NewCategories({ categories }) {
  return (
    <Center>
      <Title>CATEGORIAS</Title>
      <CategoriesGrid>
        {categories?.length > 0 &&
          categories.map((category) => <CategoryBox {...category} />)}
      </CategoriesGrid>
    </Center>
  );
}
