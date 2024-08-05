import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
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
  margin: 20px 0px 15px 0px;
  background-color: #2d3748;
  color: #fff;
`;

export default function ProductsPage({ category, products }) {
  return (
    <>
      <Header />
      <Center>
        <TitleStyled>PRODUCTOS DE {category.name}</TitleStyled>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const category = await Category.findById(id);
  const products = await Product.find({ category: id });

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
