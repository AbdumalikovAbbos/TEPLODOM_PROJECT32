import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import FooterT from "./components/FooterT";
import SuxiSmesiDetail from "./components/SuxiSmesiDetail";
import Postavshikam from "./components/Postavshikam";
import PopularTovarsDetail from "./components/PopularTovarsDetail";
import ProductCardDetail from "./components/ProductCardDetail";
// import { Contact } from "lucide-react";
import ContactPage from "./components/ContactPage";
import Vozvrat from "./components/Vozvrat";
import Novinks from "./components/Novinks";
import NovinkaDetail from "./components/NovinkaDetail";
import AksiyaPage from "./components/AksiyaPage";
import AksiyaDetail from "./components/AksiyaDetail";
import CartProvider from "./contexts/CartContext";
import CartPage from "./components/CartPage";
import Like from "./components/Like";
import { LikeProvider } from "./contexts/LikeContext";

const App = () => {
  return (
    <LikeProvider>
    <CartProvider>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryCard />} />
        <Route path="/categories/:categoryId" element={<SuxiSmesiDetail />} />
        <Route path="/all-categories" element={<ProductCard />} />
        <Route path="/suppliers" element={<Postavshikam />} />
        <Route path="/product-detail/:id" element={<PopularTovarsDetail />} />
        <Route path="/product/:id" element={<ProductCardDetail />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/returns" element={<Vozvrat />} />
        <Route path="/new" element={<Novinks />} />
        <Route path="/novinka-detail/:id" element={<NovinkaDetail />} />
        <Route path="/sale" element={<AksiyaPage />} />
        <Route path="/aksiya-detail/:id" element={<AksiyaDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/like" element={<Like />} />

      </Routes>
      <FooterT />
    </BrowserRouter>
      </CartProvider>
    </LikeProvider>
  );
};

export default App;
