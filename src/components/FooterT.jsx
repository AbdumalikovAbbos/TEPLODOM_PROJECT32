import React from "react";
const FooterT = () => {
  return (
    <footer className="bg-[#2D2B45]">
    <div className="relative max-w-7xl mx-auto px-4 py-8 pt-[100px] text-white ">
      <div className="flex gap-x-[107px]">
        <div>
          <div className="flex gap-x-[20px]">
            <div>
              <img src="/src/assets/04012019-07 1 (Traced).png" alt="" />
            </div>
            <div className="mt-2">
              <p className="font-[600] text-[26px] text-white leading-[32.5px]">
                {" "}
                TEPLODOM
              </p>
              <p className="font-[500] text-[13px] w-[136px]">
                Интернет магазин строй материалов
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-x-[12px] mt-[12px]">
              <img src="/src/assets/Frame.png" alt="" className="" />
              <div>
                <p className="font-[500] text-[18px] leading-[32px]">
                  ул.Уста Ширин, рынок{" "}
                </p>
              </div>
            </div>
            <p className="font-[500] text-[18px] leading-[32px] px-[32px]">
              Джамий, дом 134
            </p>
          </div>
        </div>
        <div>
          <p className="font-[700] text-[20px]">Быстрые ссылки</p>
          <p className="font-[400] text-[18px] mt-[17px]">Мастерам</p>
          <p className="font-[400] text-[18px] mt-[17px]">Оформление заказа</p>
          <p className="font-[400] text-[18px] mt-[17px]">
            Пользовательское соглашение
          </p>
        </div>
        <div>
          <p className="font-[700] text-[20px]">Полезное</p>
          <p className="font-[400] text-[18px] mt-[17px]">О нас</p>
          <p className="font-[400] text-[18px] mt-[17px]">Поставщикам</p>
          <p className="font-[400] text-[18px] mt-[17px]">Возврат товара</p>
        </div>
        <div>
          <p className="font-[700] text-[20px]">Контакты</p>
          <div className="flex">
            <div className="mt-4">
              <img src="/src/assets/Group 33788.png" alt="" />
            </div>
            <p className="font-[400] text-[18px] mt-[17px]">
              +998 97 761 62 51
            </p>
          </div>
          <div className="flex">
            <div className="mt-4">
              <img src="/src/assets/Group 33788.png" alt="" />
            </div>
            <p className="font-[400] text-[18px] mt-[17px]">
              +998 97 761 62 51
            </p>
          </div>

          <div className="flex gap-x-[20px] mt-[15px]">
            <img src="/src/assets/Frame (1).png" alt="" />
            <img src="/src/assets/Frame (2).png" alt="" />
            <img src="/src/assets/Frame (3).png" alt="" />
            <img src="/src/assets/Frame (4).png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white text-sm py-[77px]">
        <div className="flex-1 border-t border-white mx-4"></div>
        <p className="text-[18px]">© 2021 Teplodom. Все права защищены</p>
        <div className="flex-1 border-t border-white mx-4"></div>
      </div>
    </div>

    </footer>
  );
};

export default FooterT;
