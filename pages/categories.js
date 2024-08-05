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
