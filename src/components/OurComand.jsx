import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  {
    id: 1,
    name: "Ӯткуров Сардор",
    position: "Директор фирмы",
    img: "/src/assets/Ellipse 1624.png",
  },
  {
    id: 2,
    name: "Рахматуллаев Хаб",
    position: "Менеджерпо продажам",
    img: "/src/assets/Ellipse 1625.png",
  },
  {
    id: 3,
    name: "Усмонов Нодир",
    position: "Менеджерпо продажам",
    img: "/src/assets/Ellipse 1626.png",
  },
  {
    id: 4,
    name: "Йолдошев Донийор",
    position: "Менеджерпо продажам",
    img: "/src/assets/Ellipse 1629.png",
  },
];

export default function BrandSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8 pt-[100px] ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Наши команды</h2>
        <div className="flex space-x-[16px] me-[55px]">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-white p-[16px] rounded-full shadow"
          >
            <ChevronLeft size={24}/>
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
            <div key={brand.id} className=" flex justify-center">
              <div className="bg-white rounded-lg shadow  flex  flex-col items-center justify-end h-[295px] w-[255px] ">
                <img src={brand.img} alt={brand.name} className="mb-10" />
                <p className="font-bold ">{brand.name}</p>
                <p className="mb-[30px] text-[#878787]">{brand.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
