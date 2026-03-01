import { Routes,Route } from 'react-router-dom'
import styled from "styled-components";
import ScrollToTop from "./hooks/ScrollToTop"
import ScrollButton from "./components/ScrollButton"
import WahtsappButton from "./components/WhatsAppButton"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, About, Blog, Galery, Contact, CancelationPolicy, Privacy, Tours, NavbarSocial, Footer, BlogGuiaViajero, BlogIsabelNevado, BlogMurillo, BlogParqueNacional, Tumbas, Nevado, Canaan ,Campanita, Oso, Mirador } from "./routes";

function App() {

  return (
 
      <AppLayout>

        <ScrollToTop />

        <NavbarSocial />

        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/guia-del-viajero" element={<BlogGuiaViajero />} />
            <Route path="/blog/nevado-santa-isabel" element={<BlogIsabelNevado />} />
            <Route path="/blog/murillo-cultura-historia" element={<BlogMurillo />} />
            <Route path="/blog/parque-nacional-los-nevados" element={<BlogParqueNacional />} />

            <Route path="/galery" element={<Galery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<CancelationPolicy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/tours" element={<Tours />} />

            <Route path="/tours/valle-tumbas" element={<Tumbas />} />
            <Route path="/tours/nevado-santa-isabel" element={<Nevado />} />
            <Route path="/tours/canaan" element={<Canaan />} />
            <Route path="/tours/campanita" element={<Campanita />} />
            <Route path="/tours/camino-oso" element={<Oso />} />
            <Route path="/tours/mirador" element={<Mirador />} />
          </Routes>  
        </MainContent>

        <Footer />

        <ScrollButton />
        <WahtsappButton />

      </AppLayout>

  )
}

export default App

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;
