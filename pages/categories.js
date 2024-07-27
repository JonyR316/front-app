import Center from "@/components/Center";
import Header from "@/components/Header";
import CategoriesGrid from "@/components/CategoriesGrid";
import Pagination from "@/components/Pagination"; // Añade este import
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import styled from "styled-components";
import { useState } from "react";
import Title from "@/components/Title";

export default function CategoriesPage({ categories, totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Header />
      <Center>
        <Title>CATEGORIAS</Title>
        <CategoriesGrid categories={categories} />
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
  const categories = await Category.find({}, null, {
    sort: { "_id:": -1 },
    skip,
    limit,
  });
  const totalCategories = await Category.countDocuments();
  const totalPages = Math.ceil(totalCategories / limit);

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      totalPages,
    },
  };
}
