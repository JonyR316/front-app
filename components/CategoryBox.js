import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductWrapper = styled(motion.div)`
  background-color: #2d3748;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 9px 3px 15px #000;
`;

const WhiteBox = styled.div`
  background-color: #2d3748;
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
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
  box-shadow: 9px 3px 15px #000;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  background-color: #2d3748;
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default function CategoryBox({ _id, name, parent, properties }) {
  const url = parent ? `/subcategory/${_id}` : `/category/${_id}`;
  return (
    <StyledLink href={url}>
      <ProductWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{name}</Title>
        <WhiteBox>
          <img src="https://jony-next-commerce.s3.amazonaws.com/1722311337254.jpeg" />
        </WhiteBox>
      </ProductWrapper>
    </StyledLink>
  );
}
