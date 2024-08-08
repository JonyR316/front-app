import styled from "styled-components";
import Center from "./Center";
import CategoryBox from "./CategoryBox";

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
`;

export default function NewCategories({ categories }) {
  return (
    <Center>
      <CategoriesGrid>
        {categories?.length > 0 &&
          categories.map((category) => (
            <CategoryBox key={category._id} {...category} />
          ))}
      </CategoriesGrid>
    </Center>
  );
}
