import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

// Importa la imagen que deseas usar
const logoImageUrl =
  "https://jony-next-commerce.s3.amazonaws.com/1721220011677.jpg";

const StyledHeader = styled.header`
  background-color: white;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;

  img {
    height: 80px; /* Ajusta la altura de la imagen según sea necesario */
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center; /* Asegura que todos los elementos estén alineados en el centro verticalmente */
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
  display: block;
  `
      : `
  display: none;
  `}

  gap: 10px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: white;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <img src={logoImageUrl} alt="Logo" />
          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>
              <b>INICIO</b>
            </NavLink>
            <NavLink href={"/products"}>
              <b>PRODUCTOS</b>
            </NavLink>
            <NavLink href={"/categories"}>
              <b>CATEGORIAS</b>
            </NavLink>
            <NavLink href={"/nosotros"}>
              <b>NOSOTROS</b>
            </NavLink>
            <NavLink href={"/cart"}>
              <b>CARRITO</b> ({cartProducts.length})
            </NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
