import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Imput";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 10px #000;
`;

const ProductInfoProduct = styled.td`
  padding: 10px 0;
`;
const ProductInti = styled.td`
  padding: 10px 0;
`;
const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  box-shadow: 0 0 10px #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 70%;
    max-height: 70px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80%;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 150px;
    margin-top: 20px;
  }
`;
const EmptyCartMessage1 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  img {
    max-width: 350px;
    margin-top: 20px;
    box-shadow: 0 0 10px #000;
  }
`;
export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [local, setLocal] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [main, setMain] = useState("");
  const [secondary, setSecondary] = useState("");

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  const handlePhoneChange = (ev) => {
    const value = ev.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  const handlePhoneChangeLocal = (ev) => {
    const value = ev.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setLocal(value);
    }
  };

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    if (
      !name ||
      !email ||
      !phone ||
      !local ||
      !city ||
      !address ||
      !main ||
      !secondary
    ) {
      Swal.fire({
        title: "Faltan campos por llenar",
        text: "Por favor, completa todos los campos antes de continuar.",
        imageUrl:
          "https://jony-next-commerce.s3.amazonaws.com/1721834304491.jpeg",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Imagen de alerta",
      });
      return;
    }

    try {
      const response = await axios.post("/api/checkout", {
        name,
        email,
        phone,
        local,
        city,
        address,
        main,
        secondary,
        cartProducts,
      });

      console.log("Response from checkout:", response.data);

      if (response.data.success) {
        clearCart();
        window.location.href = "/thank-you"; // Redirige a la página de agradecimiento
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const precio = products.find((p) => p._id === productId)?.precio || 0;
    total += precio;
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <EmptyCartMessage>
              <h2>CARRITO</h2>
              {!cartProducts.length && (
                <EmptyCartMessage1>
                  <p>TU CARRITO ESTÁ VACÍO</p>
                  <img
                    src="https://jony-next-commerce.s3.amazonaws.com/1721664270584.jpeg"
                    alt="Imagen de carrito vacío"
                  />
                </EmptyCartMessage1>
              )}
            </EmptyCartMessage>
            {products.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoProduct>
                        <ProductImageBox>
                          <img src={product.images[0]} alt={product.title} />
                        </ProductImageBox>
                        <ProductInti>{product.title}</ProductInti>
                      </ProductInfoProduct>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.precio}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts.length && (
            <Box>
              <h2>INFORMACIÓN DEL PEDIDO</h2>

              <Input
                type="text"
                placeholder="NOMBRE"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="EMAIL"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="CELULAR"
                value={phone}
                name="phone"
                onChange={handlePhoneChange}
                pattern="[0-9]*"
              />
              <Input
                type="text"
                placeholder="CONVENCIONAL"
                value={local}
                name="local"
                onChange={handlePhoneChangeLocal}
                pattern="[0-9]*"
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="CIUDAD"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="DIRECCIÓN"
                value={address}
                name="address"
                onChange={(ev) => setAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="CALLE PRINCIPAL"
                value={main}
                name="main"
                onChange={(ev) => setMain(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="CALLE SECUNDARIA"
                value={secondary}
                name="secondary"
                onChange={(ev) => setSecondary(ev.target.value)}
              />

              <Button black block onClick={goToPayment}>
                CONTINUAR CON EL PAGO
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
