import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartIcon from "@/components/icons/CartIcon";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import TitleP from "@/components/TitleP";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.6rem;
`;

const WhiteBoxP = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 9px 3px 15px #000;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  if (!product) {
    return (
      <>
        <Header />
        <Center>
          <TitleP>Producto no encontrado</TitleP>
        </Center>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBoxP>
            <ProductImages images={product.images} />
          </WhiteBoxP>
          <div>
            <TitleP>{product.title}</TitleP>
            <p>{product.descripcion}</p>
            <PriceRow>
              <div>
                <Price>${product.precio}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  AÑADIR AL
                  <CartIcon />
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);

  if (!product) {
    return {
      props: {
        product: null,
      },
    };
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
