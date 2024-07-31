import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import ProductsGrid from "@/components/ProductsGrid";
import Pagination from "@/components/Pagination"; // Añade este import
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { useState } from "react";
import Footer from "@/components/Footer";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 150px;
  margin-top: 30px;
  text-align: center;
`;

export default function CategoryPage({
  category,
  products,
  totalPages,
  initialPage,
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <Title>{category.name}</Title>
          </WhiteBox>
        </ColWrapper>
        {products.length > 0 ? <ProductsGrid products={products} /> : <p></p>}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.location.href = `/category/${category._id}?page=${page}`;
          }}
        />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const page = parseInt(context.query.page) || 1;
  const limit = 16;
  const skip = (page - 1) * limit;

  const category = await Category.findById(id);
  const totalProducts = await Product.countDocuments({ category: id });
  const products = await Product.find({ category: id }).skip(skip).limit(limit);

  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
      totalPages,
      initialPage: page,
    },
  };
}
