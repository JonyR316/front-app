import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Title from "@/components/Title";
import Pagination from "@/components/Pagination"; // Asegúrate de que esta ruta sea correcta
import styled from "styled-components";
import { useRouter } from "next/router";

const TitleStyled = styled(Title)`
  box-shadow: 9px 3px 15px #000;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  height: 35px;
  justify-content: center;
  font-size: 2rem;
  margin: 20px;
  margin: 20px 15px;
  background-color: #2d3748;
  color: #fff;
`;

export default function SubCategoryPage({
  category,
  products,
  totalPages,
  initialPage,
}) {
  const router = useRouter();
  const { page } = router.query;

  const handlePageChange = (page) => {
    router.push(`/subcategory/${category._id}?page=${page}`);
  };

  return (
    <>
      <Header />
      <Center>
        <TitleStyled>PRODUCTOS DE {category.name}</TitleStyled>
        <ProductsGrid products={products} />
        <Pagination
          currentPage={parseInt(page) || 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
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
