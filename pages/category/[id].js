import Center from "@/components/Center";
import Header from "@/components/Header";
import CategoriesGrid from "@/components/CategoriesGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import Title from "@/components/Title";
import styled from "styled-components";

const TitleStyled = styled(Title)`
  margin-bottom: 20px;
`;

export default function SubcategoriesPage({ category, subcategories }) {
  return (
    <>
      <Header />
      <Center>
        <TitleStyled>{category.name}</TitleStyled>
        <CategoriesGrid categories={subcategories} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const category = await Category.findById(id);
  const subcategories = await Category.find({ parent: id });

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
    },
  };
}
