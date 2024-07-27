import styled from "styled-components";
import Link from "next/link";

const ProductWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 9px 3px 15px #000;
`;
const WhiteBox = styled.div`
  background-color: #ccc;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 9px 3px 15px #000;
  margin-top: 10px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  box-shadow: 9px 3px 15px #000;
  padding: 10px;
  border-radius: 10px;
`;

export default function CategoryBox({ _id, name, parent, properties }) {
  const url = "/category/" + _id;
  return (
    <Link href={url}>
      <ProductWrapper>
        <Title>{name}</Title>
        <WhiteBox>
          <img src="https://jony-next-commerce.s3.amazonaws.com/1722038337143.png" />
        </WhiteBox>
      </ProductWrapper>
    </Link>
  );
}
