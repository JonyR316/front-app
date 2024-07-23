import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Pagination from "@/components/Pagination"; // Añade este import
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { useState } from "react";
import Title from "@/components/Title";

export default function ProductsPage({ products, totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <Center>
        <Title>TODOS LOS PRODUCTOS</Title>
        <ProductsGrid products={products} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1;
  const limit = 24;
  const skip = (page - 1) * limit;

  await mongooseConnect();
  const products = await Product.find({}, null, {
    sort: { "_id:": -1 },
    skip,
    limit,
  });
  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      totalPages,
    },
  };
}
