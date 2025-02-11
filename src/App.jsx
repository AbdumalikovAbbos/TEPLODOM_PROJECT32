import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import FooterT from "./components/FooterT";
import SuxiSmesiDetail from "./components/SuxiSmesiDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryCard />} />
        <Route path="/categories/:categoryId" element={<SuxiSmesiDetail />} />
        <Route path="/all-categories" element={<ProductCard />} />
      </Routes>
      <FooterT />
    </BrowserRouter>
  );
};

export default App;
