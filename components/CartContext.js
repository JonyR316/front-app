import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]); // Solo ejecuta cuando `ls` está disponible

  useEffect(() => {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]); // Dependencias ajustadas

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    setCartProducts((prev) => {
      const index = prev.lastIndexOf(productId);
      if (index === -1) return prev;
      const updatedCart = [...prev];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  }

  function clearCart() {
    setCartProducts([]);
    if (ls) {
      ls.removeItem("cart");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
