// const advantages = [
//   {
//     img: "/src/assets/clarity_star-lineportfolio.svg",
//     text: "50 000 довольных клиентов по всей стране",
//     bg: "bg-blue-100",
//   },
//   {
//     text: "Более 5 000 позиций товаров на складах",
//     bg: "bg-orange-100",
//   },

//   {
//     text: "99% заказов приходит в назначенное время",
//     bg: "bg-purple-100",
//   },
//   {
//       text: "Бесплатная доставка по городу Ташкент (при заказе от 3 млн.)",
//       bg: "bg-green-100",
//     },
//     {
//       text: "5 лет на рынке инструмента и техники",
//       bg: "bg-blue-200",
//     },
// ];

// const AdvantagesTwoRows = () => {
//   return (
//     <section className="   relative max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-8">Наши преимущества</h2>
//       <div className="grid grid-cols-1 md:grid-flow-col md:grid-rows-2 gap-6">
//         {advantages.map((adv, index) => (
//           <div
//             key={index}
//             className=" p-4  flex flex-col items-center text-center"
//           >
//             <div
//               className={`w-12 h-12 p-[12px] flex items-center justify-center rounded-full ${adv.bg} mb-4`}
//             >
//               {adv.img && <img src={adv.img} alt="" className="" />}
//             </div>
//             <p className="text-gray-700 text-sm">{adv.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AdvantagesTwoRows;


const AdvantagesTwoRows = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Наши преимущества</h2>
      <div className="all-cards flex gap-[96px]  items-center ">
        <div className="flex gap-[20px] ">
          <div>
            <img src="/src//assets/clarity_star-lineportfolio.svg" alt="" />
          </div>
          <p className="w-[222px] ">50 000 довольных клиентов по всей страна</p>
        </div>
        <div className="flex gap-[20px]">
          <div>
            <img src="/src//assets/clarity_plane-lineportfolio.svg" alt="" />
          </div>
          <p className="w-[207px] ">99% заказов приходит в назначенное время</p>
        </div>
        <div className="flex gap-[20px]">
          <div>
            <img
              src="/src//assets/fluent_building-shop-20-regularstore.svg"
              alt=""
            />
          </div>
          <p className="w-[208px] ">5 лет на рынке инструмента и техники</p>
        </div>
      </div>
      <div className="all-cards2 flex gap-[96px] items-center justify-center mt-[72px]">
        <div className="flex gap-[20px]">
          <div className="flex gap-[20px] ">
            <img
              src="/src/assets/healthicons_stock-out-outlineportfolio.svg"
              alt=""
            />
          </div>
          <p className="w-[222px] mt-[25px]">
            Боле 5 000 позиций товаров на складах
          </p>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex gap-[20px] ">
            <img src="/src/assets/carbon_deliveryportfolio.svg" alt="" />
          </div>
          <p className="w-[222px] mt-[25px]">
            Боле 5 000 позиций товаров на складах
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesTwoRows;
