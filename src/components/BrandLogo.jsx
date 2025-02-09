import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { id: 1, name: "KBT", img: "/src/assets/image 63 (2).png" },
  { id: 2, name: "YATO", img: "/src/assets/image 64 (1).png" },
  { id: 3, name: "VIKO", img: "/src/assets/image 65 (1).png" },
  { id: 4, name: "Uzkabel", img: "/src/assets/image 66 (1).png" },
  { id: 5, name: "TOTAL", img: "/src/assets/image 67 (1).png" },
];

export default function BrandSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8 pt-[100px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Бренды</h2>
        <div className="flex space-x-[16px] me-[55px]">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white p-[16px] rounded-full shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-white p-[16px] rounded-full shadow"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="px-2 flex justify-center">
              <div className="bg-white rounded-lg shadow  flex flex-col items-center justify-end h-[160px] ">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="mt-4"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
