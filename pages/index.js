// pages/index.js
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import NewCategories from "@/components/NewCategories";
import { Category } from "@/models/Category";
import Footer from "@/components/Footer";
import Portada from "./portada";
import Franjas from "@/components/Franjas";

export default function HomePage({
  featuredProduct,
  newProducts,
  newCategories,
}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <Franjas />
      <Portada />
      <NewProducts products={newProducts} />
      <Franjas />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "668c177cf4b0375fcca00c79";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 16,
  });
  const newCategories = await Category.find({}, null, {
    sort: { _id: -1 },
    limit: 16,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      newCategories: JSON.parse(JSON.stringify(newCategories)),
    },
  };
}
