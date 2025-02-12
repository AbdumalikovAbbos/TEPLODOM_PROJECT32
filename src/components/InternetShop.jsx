const InternetShop = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-8 pt-[100px] pb-[100px]">
      <h2 className="font-bold text-2xl md:text-[25px] mb-8">
        Интернет магазин Теплодом
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-[90px]">
        <div className="w-full md:max-w-[529px]">
          <p className="text-lg md:text-[20px] font-semibold">
            Компания <b>Teplodom</b> является лидером строительных материалов на локальном рынке и предлагает широкий ассортимент строительных,
            отделочных материалов и товаров для дома всем клиентам Узбекистана. В каталоге на сайте Teplodom представлена продукция самых известных
            брендов от крупнейших мировых производителей, а также популярные отечественные торговые марки. Благодаря удобной навигации, легко
            найти необходимый товар и отложить его в корзину для оформления онлайн заказа. Высокое качество, экспертные знания, качественные
            ресурсы и улучшение производства с каждым днем является обязательным требованием для нашего бренда!
          </p>
        </div>
        <div className="w-full md:w-auto">
          <img src="/src/assets/Rectangle 23785.png" alt="Интернет магазин Теплодом" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default InternetShop;
