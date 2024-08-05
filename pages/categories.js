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

export default function CategoriesPage({ categories }) {
  return (
    <>
      <Header />
      <Center>
        <TitleStyled>TODAS LAS CATEGORIAS</TitleStyled>
        <CategoriesGrid categories={categories} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const categories = await Category.find({ parent: null });

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
