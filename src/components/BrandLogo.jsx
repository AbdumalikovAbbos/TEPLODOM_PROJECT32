import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Custom icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
    { id: 1, name: "KBT", img: "/src/assets/image 63 (2).png" },
    { id: 2, name: "YATO", img: "/src/assets/image 64 (1).png" },
    { id: 3, name: "VIKO", img: "/src/assets/image 65 (1).png" },
    { id: 4, name: "Uzkabel", img: "/src/assets/image 66 (1).png" },
    { id: 5, name: "TOTAL", img: "/src/assets/image 67 (1).png" },
  ];;

export default function BrandSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true, // Allows swipe on mobile
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Бренды</h2>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="px-2">
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
              <img src={brand.img} alt={brand.name} className="max-h-20" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
        onClick={() => sliderRef.current.slickNext()}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
