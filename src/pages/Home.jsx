import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import BrandSlider from "../components/BrandLogo";
import OurProducts from "../components/OurProducts";

const Home = () => {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <CategoryCard />
      <ProductCard />
      <BrandSlider />
      <OurProducts />
    </div>
  );
};

export default Home;
