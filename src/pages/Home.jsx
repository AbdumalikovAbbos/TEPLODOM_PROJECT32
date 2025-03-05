import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import BrandSlider from "../components/BrandLogo";
import OurProducts from "../components/OurProducts";
import OurComand from "../components/OurComand";
import InternetShop from "../components/InternetShop";
// import FooterT from "../components/FooterT";
// import { Route, Router } from "lucide-react";
// import { Routes } from "react-router-dom";
// import Postavshikam from "../components/Postavshikam";
import PopularTovars from "../components/PopularTovars";
// import PopularTovarsDetail from "../components/PopularTovarsDetail";
const Home = () => {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <CategoryCard />
      <ProductCard />
      <BrandSlider />
      <PopularTovars />   
      <OurProducts />
      <OurComand />
    <InternetShop />
    </div>
  );
};

export default Home;
