import styled from "styled-components";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  box-shadow: 10px 6px 10px #000;
  border-radius: 10px;
`;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  img {
    max-width: 140%;
    max-height: 140px;
  }
`;

const Title = styled.div`
  font-weight: normal;
  font-size: 1rem;
  color: inherit;
  text-decoration: 600;
  margin: 6px;
  color: #000000;
  font-weight: bold;
`;
export default function CategoryBox({ _id, name, parent, properties }) {
  return (
    <CategoryWrapper>
      <Title>{name}</Title>
      <WhiteBox>
        <img
          src="https://jony-next-commerce.s3.amazonaws.com/1721861060488.jpeg"
          alt=""
        />
      </WhiteBox>
    </CategoryWrapper>
  );
}
