import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

// Importa la imagen que deseas usar
const logoImageUrl =
  "https://jony-next-commerce.s3.amazonaws.com/1721220975808.png";

const StyledHeader = styled.header`
  background-color: #2d3748;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;

  img {
    height: 40px; /* Ajusta la altura de la imagen según sea necesario */
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center; /* Asegura que todos los elementos estén alineados en el centro verticalmente */
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;
const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <img src={logoImageUrl} alt="Logo" />
          </Logo>
          <StyledNav>
            <NavLink href={"/"}>INICIO</NavLink>
            <NavLink href={"/products"}>TODOS LOS PRODUCTOS</NavLink>
            <NavLink href={"/products"}>CATEGORIAS</NavLink>
            <NavLink href={"/products"}>CUENTA</NavLink>
            <NavLink href={"/products"}>
              CARRITO ({cartProducts.length})
            </NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
