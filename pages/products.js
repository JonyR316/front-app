import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Pagination from "@/components/Pagination";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import { useRouter } from "next/router";
import Title from "@/components/Title";

export default function ProductsPage({ products, totalPages, currentPage }) {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/products?page=${page}`);
  };

  return (
    <>
      <Header />
      <Center>
        <Title>TODOS LOS PRODUCTOS</Title>
        <ProductsGrid products={products} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
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
    sort: { _id: -1 },
    skip,
    limit,
  });
  const totalProducts = await Product.countDocuments();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      totalPages,
      currentPage: page,
    },
  };
}
