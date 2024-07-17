import Center from "@/components/Center";
import styled from "styled-components";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
  div {
    aling-items: center;
  }
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <div>
            <Title>Pro anywhere</Title>
            <Desc>
              Lorem Ipsum es simplemente un texto de relleno de la industria de
              la impresión y la composición tipográfica. Lorem Ipsum ha sido el
              texto de relleno estándar de la industria desde el año 1500,
              cuando un impresor desconocido tomó una galera de tipos y la
              mezcló para hacer un libro de muestras de tipos.
            </Desc>
          </div>
          <div>
            <img
              src="https://jony-next-commerce.s3.amazonaws.com/1721231361613.png"
              alt=""
            />
          </div>
        </Wrapper>
      </Center>
    </Bg>
  );
}
