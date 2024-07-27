import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;

export default function CategoryPage({ category }) {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <Title>{category.name}</Title>
            <img
              style={{ maxWidth: "100%" }}
              src="https://jony-next-commerce.s3.amazonaws.com/1722038337143.png"
            />
          </WhiteBox>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const category = await Category.findById(id);
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
    },
  };
}
