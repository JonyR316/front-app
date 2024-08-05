import Center from "@/components/Center";
import Header from "@/components/Header";
import CategoriesGrid from "@/components/CategoriesGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import Title from "@/components/Title";
import styled from "styled-components";

const TitleStyled = styled(Title)`
  box-shadow: 9px 3px 15px #000;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  height: 35px;
  justify-content: center;
  font-size: 2rem;
  margin: 20px;
  margin: 20px 150px 0px 150px;
  background-color: #2d3748;
  color: #fff;
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
