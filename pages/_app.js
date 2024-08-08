import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import Footer from "@/components/Footer"; // Ajusta la ruta según tu estructura de carpetas
import styled from "styled-components";
import FooterU from "@/components/FooterU";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body {
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor abarque al menos la altura de la ventana */
`;

const ContentWrapper = styled.div`
  flex: 1; /* Permite que el contenido principal crezca y ocupe el espacio disponible */
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <PageContainer>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </PageContainer>
      </CartContextProvider>
    </>
  );
}
