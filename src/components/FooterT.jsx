import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2D2B45]">
      <div className="max-w-7xl mx-auto">
        <div className="footer-wrapper py-[40px] sm:py-[80px]">
          <div className="sm:justify-around flex md:justify-start lg:justify-between flex-col sm:flex-row flex-wrap gap-[30px] sm:gap-[40px]">
            <div className="first">
              <div className="location flex text-[#fff] gap-[14px] mb-[17px]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.5868 0.0117652C32.4872 0.360521 27.8783 1.5171 23.3157 3.59314C22.1978 4.10179 21.9916 4.20545 20.8176 4.84895C16.1007 7.43433 12.009 10.8814 8.66628 15.086C3.48544 21.6025 0.509762 29.4514 0.0319529 37.8606C-0.029496 38.9423 0.00295626 42.0767 0.0843905 42.9232C0.36539 45.8445 0.586891 47.2607 1.09071 49.3582C1.97512 53.0403 3.39384 56.6129 5.26603 59.8726C6.13372 61.3834 6.90424 62.5682 7.00589 62.5479C7.10226 62.5288 12.3181 57.3652 12.3181 57.289C12.3181 57.2499 12.1123 56.8661 11.8609 56.4361C11.0492 55.0485 10.3381 53.596 9.70367 52.0299C9.1222 50.5944 8.45098 48.3833 8.12518 46.8302C6.41644 38.684 7.81179 30.2656 12.0366 23.2322C15.2322 17.9123 19.8772 13.606 25.4119 10.8323C27.2565 9.90791 28.9295 9.24872 30.8676 8.68267C32.7537 8.13184 34.4845 7.79171 36.6392 7.54838C37.6354 7.43588 38.0813 7.4187 39.9988 7.4187C41.9164 7.4187 42.3622 7.43588 43.3584 7.54838C45.5131 7.79171 47.2439 8.13184 49.13 8.68267C51.0681 9.24872 52.7411 9.90791 54.5858 10.8323C59.0927 13.0909 63.007 16.3572 66.0522 20.4006C70.5543 26.3783 72.8793 33.8294 72.5603 41.257C72.4644 43.4905 72.1167 46.004 71.6621 47.7495C70.7959 51.0761 69.7097 53.7556 68.1478 56.4193C67.8903 56.8585 67.6796 57.2499 67.6796 57.289C67.6796 57.3652 72.8954 62.5288 72.9917 62.5479C73.177 62.5848 74.9423 59.6191 75.918 57.6318C78.3207 52.7379 79.653 47.6084 79.9695 42.0326C80.0299 40.968 79.9953 37.9608 79.912 37.034C79.7303 35.0131 79.6343 34.2862 79.3276 32.6099C77.8659 24.6196 73.8235 17.0522 67.9762 11.36C61.9241 5.46861 54.3982 1.70877 46.0576 0.409988C44.034 0.0949016 42.9659 0.0190027 40.3434 0.00406429C39.001 -0.0035773 37.7605 -0.000128059 37.5868 0.0117652ZM33.8682 21.7651L27.7664 27.8698V24.7086V21.5475L27.4075 21.3539C26.396 20.808 25.478 20.3094 24.7881 19.931C24.366 19.6995 24.0105 19.5101 23.9981 19.5101C23.9857 19.5101 23.6528 19.3291 23.2583 19.1079C22.8637 18.8867 22.5085 18.7064 22.4689 18.7073C22.4293 18.7081 22.2676 18.9161 22.1097 19.1693C21.9518 19.4225 21.6675 19.8679 21.478 20.1591C21.2885 20.4503 20.9279 21.0115 20.6767 21.4064C20.4255 21.8012 20.0622 22.3699 19.8694 22.6701C19.6766 22.9703 19.4116 23.384 19.2805 23.5894C19.1495 23.7948 18.7846 24.3633 18.4696 24.8527C18.1546 25.3421 17.907 25.7527 17.9194 25.7651C17.9318 25.7775 18.5954 25.4258 19.3941 24.9834C20.1928 24.541 20.9755 24.1079 21.1334 24.0209C21.2913 23.934 21.5529 23.7883 21.7147 23.6974C21.8765 23.6064 22.025 23.5319 22.0449 23.5319C22.0647 23.5319 22.0802 27.1711 22.0791 31.6188L22.0773 39.7057L21.9094 39.3035C21.817 39.0823 21.5452 38.3971 21.3052 37.7809C20.5419 35.8207 20.3949 35.4553 20.3458 35.398C20.3173 35.3647 18.618 37.0227 16.1357 39.506C12.2864 43.3568 11.9735 43.6842 11.9735 43.8617C11.9735 44.1842 12.2576 45.9169 12.4649 46.8589C12.7852 48.3145 13.1496 49.5285 13.7037 50.9863C13.9855 51.7275 14.5576 53.0066 14.6074 53.0066C14.6275 53.0066 20.3487 47.2992 27.3213 40.3234L39.9988 27.6401L52.6882 40.3353C59.6674 47.3177 65.3911 53.0172 65.4074 53.0008C65.4602 52.9479 65.9048 51.9606 66.1421 51.3692C66.711 49.9514 67.1715 48.4717 67.5102 46.9738C67.7037 46.1178 68.0234 44.1869 68.0238 43.8712C68.0241 43.68 67.3284 42.974 54.0258 29.6653C46.3267 21.9627 40.0145 15.6605 39.9988 15.6605C39.983 15.6605 37.2243 18.4076 33.8682 21.7651ZM37.5465 38.1255C37.0182 38.2641 36.3853 38.542 36.0124 38.7992C35.3339 39.2673 34.607 40.1216 34.3086 40.8016C34.1126 41.2481 33.9113 42.0815 33.9113 42.4461V42.7796H36.2946H38.6779V40.3952V38.0107L38.319 38.0139C38.1216 38.0156 37.774 38.0658 37.5465 38.1255ZM41.3197 40.3952V42.7796H43.703H46.0863V42.4461C46.0863 42.0815 45.885 41.2481 45.689 40.8016C45.3906 40.1216 44.6637 39.2673 43.9852 38.7992C43.3672 38.3729 42.297 38.0107 41.6551 38.0107H41.3197V40.3952ZM33.9113 47.2036V49.6168H36.2946H38.6779V47.2036V44.7905H36.2946H33.9113V47.2036ZM41.3197 47.2036V49.6168H43.703H46.0863V47.2036V44.7905H43.703H41.3197V47.2036ZM49.3909 51.6414C49.375 51.7129 49.355 51.8618 49.3465 51.9725L49.331 52.1735L47.654 52.2023C46.6523 52.2194 45.9541 52.2542 45.9201 52.2885C45.8888 52.3201 45.8552 52.4881 45.8455 52.6619L45.8278 52.9779L40.2572 53.0107C34.372 53.0453 34.4633 53.0413 33.2509 53.3199C31.9689 53.6144 30.2817 54.367 29.0235 55.2056C27.2292 56.4014 25.3185 58.3315 23.9918 60.2886C23.751 60.6438 23.5663 60.9468 23.5814 60.9619C23.5965 60.9771 23.9661 60.81 24.4027 60.5908C26.5194 59.528 28.9636 58.7853 31.0068 58.5841C32.8035 58.4072 34.9123 58.6251 35.6628 59.065C36.6498 59.6437 37.2576 61.2562 37.4111 63.7034C37.4648 64.5602 37.5289 64.7496 37.8243 64.9241L37.9888 65.0214V68.7893V72.5573L37.4863 72.5184C30.8178 72.0025 24.5342 69.476 19.3243 65.2158C17.8816 64.0361 16.4342 62.6118 15.1289 61.0871L14.5946 60.463L14.1327 60.9434C9.49257 65.7695 9.50405 65.7574 9.50405 65.8485C9.50405 65.932 10.7073 67.2528 11.6289 68.1808C15.118 71.6942 18.9338 74.3525 23.5119 76.4588C30.2791 79.5723 38.3535 80.6984 45.8566 79.5751C53.7514 78.3933 60.8639 75.0303 66.8468 69.6504C68.0532 68.5656 70.4936 66.0089 70.4936 65.8298C70.4936 65.7968 70.1124 65.3732 69.6465 64.8885C68.6373 63.8386 66.5737 61.6859 65.8917 60.9717L65.4051 60.462L64.8708 61.0866C60.3576 66.3625 54.4878 70.0098 47.8645 71.6539C46.6552 71.9541 45.1545 72.2306 43.9901 72.3679C43.7058 72.4014 43.3892 72.4396 43.2866 72.4528L43.1 72.4768V68.7449V65.013L43.2866 64.923C43.5593 64.7916 43.6924 64.5795 43.7134 64.2432C43.8339 62.313 43.9351 61.6277 44.2255 60.7752C44.495 59.9839 44.9658 59.243 45.4186 58.8975C45.5815 58.7732 45.6411 58.7558 45.734 58.8055C45.797 58.8392 45.8568 58.9251 45.8669 58.9963L45.8853 59.1257L47.5459 59.1409C48.654 59.1511 49.232 59.1773 49.2831 59.2198C49.3289 59.2578 49.3597 59.403 49.3597 59.5808C49.3597 59.7445 49.3907 59.9094 49.4286 59.9473C49.5355 60.0542 53.6861 60.0454 53.7751 59.9381C53.8222 59.8812 53.8359 58.7255 53.8252 55.7007L53.8105 51.5415L51.6151 51.5265L49.4197 51.5114L49.3909 51.6414Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <h1 className="text-[20px] sm:text-[26px] font-semibold">
                    TEPLODOM
                  </h1>
                  <p className="text-[13px] font-medium">
                    Интернет магазин <br />
                    строй материалов
                  </p>
                </div>
              </div>
              <div className="location-info text-[#fff] gap-[12px] hidden md:flex">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18.9L13.95 13.95C14.9289 12.971 15.5955 11.7237 15.8656 10.3659C16.1356 9.00801 15.9969 7.60058 15.4671 6.32154C14.9373 5.0425 14.04 3.94929 12.8889 3.18015C11.7378 2.41101 10.3844 2.00049 9 2.00049C7.61557 2.00049 6.26222 2.41101 5.11109 3.18015C3.95996 3.94929 3.06275 5.0425 2.53292 6.32154C2.00308 7.60058 1.86442 9.00801 2.13445 10.3659C2.40449 11.7237 3.07111 12.971 4.05 13.95L9 18.9ZM9 21.728L2.636 15.364C1.37734 14.1053 0.520187 12.5017 0.172928 10.7558C-0.17433 9.01001 0.00390685 7.20041 0.685099 5.55588C1.36629 3.91136 2.51984 2.50575 3.99988 1.51683C5.47992 0.527899 7.21998 6.10352e-05 9 6.10352e-05C10.78 6.10352e-05 12.5201 0.527899 14.0001 1.51683C15.4802 2.50575 16.6337 3.91136 17.3149 5.55588C17.9961 7.20041 18.1743 9.01001 17.8271 10.7558C17.4798 12.5017 16.6227 14.1053 15.364 15.364L9 21.728ZM9 11C9.53044 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53042 11 8.99998C11 8.46955 10.7893 7.96084 10.4142 7.58577C10.0391 7.2107 9.53044 6.99998 9 6.99998C8.46957 6.99998 7.96086 7.2107 7.58579 7.58577C7.21072 7.96084 7 8.46955 7 8.99998C7 9.53042 7.21072 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11ZM9 13C7.93914 13 6.92172 12.5786 6.17158 11.8284C5.42143 11.0783 5 10.0608 5 8.99998C5 7.93912 5.42143 6.9217 6.17158 6.17156C6.92172 5.42141 7.93914 4.99998 9 4.99998C10.0609 4.99998 11.0783 5.42141 11.8284 6.17156C12.5786 6.9217 13 7.93912 13 8.99998C13 10.0608 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13Z"
                    fill="white"
                  />
                </svg>
                <div>
                  <a href={"https://yandex.uz/maps/-/CHqEBH0a"} target="_blank">
                    <p>ул.Уста Ширин, рынок </p>
                    <p>Джамий, дом 134 </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="second">
              <ul className="flex flex-col items-start gap-[15px]">
                <li className="sm:mb-[10px]">
                  <Link
                    to={"/"}
                    className={
                      "text-[#fff] text-[16px] sm:text-[20px] sm:font-semibold"
                    }
                  >
                    Быстрые ссылки
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    Мастерам
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    Оформление заказа
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    Пользовательское соглашение
                  </Link>
                </li>
              </ul>
            </div>
            <div className="third">
              <ul className="flex flex-col items-start gap-[15px]">
                <li className="sm:font-semibold text-[20px] sm:mb-[10px]">
                  <Link
                    to={"/"}
                    className={"text-[#fff] text-[16px] sm:text-[20px]"}
                  >
                    Полезное
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    Поставщикам
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className={"text-[#fff] text-[16px]"}>
                    Возврат товара
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fourth">
              <ul className="flex flex-col gap-[15px] items-start">
                <li className="sm:font-semibold text-[16px] sm:text-[20px] sm:mb-[10px]">
                  <Link to={"/"} className={"text-[#fff]"}>
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link
                    to={"tel:+998901234567"}
                    className={
                      "text-[#fff] text-[16px] flex items-center gap-[10px]"
                    }
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_201)">
                        <path
                          d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5544 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5639 14.5975 20.7346 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_201">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    +998 97 761 62 51
                  </Link>
                </li>
                <li>
                  <Link
                    to={"tel:+998977616251"}
                    className={
                      "text-[#fff] text-[16px] flex items-center gap-[10px]"
                    }
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_201)">
                        <path
                          d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5544 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5639 14.5975 20.7346 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_201">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    +998 93 556 91 31
                  </Link>
                </li>
                <li className="flex items-center gap-[20px]">
                  <Link to={"https://t.me/abdurhamonMirmaxsudov"}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.89 11.17L4.392 10.391C3.852 10.226 3.849 9.854 4.513 9.587L14.246 5.827C14.811 5.597 15.131 5.888 14.948 6.617L13.291 14.437C13.175 14.994 12.84 15.127 12.375 14.87L9.824 12.982L8.635 14.13C8.513 14.248 8.414 14.349 8.226 14.374C8.039 14.4 7.885 14.344 7.772 14.034L6.902 11.163L6.89 11.171V11.17Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75ZM10 2C7.526 2 7.122 2.007 5.971 2.058C5.187 2.095 4.661 2.2 4.173 2.39C3.739 2.558 3.426 2.759 3.093 3.093C2.78001 3.3954 2.53935 3.76458 2.389 4.173C2.199 4.663 2.094 5.188 2.058 5.971C2.006 7.075 2 7.461 2 10C2 12.474 2.007 12.878 2.058 14.029C2.095 14.812 2.2 15.339 2.389 15.826C2.559 16.261 2.759 16.574 3.091 16.906C3.428 17.242 3.741 17.443 4.171 17.609C4.665 17.8 5.191 17.906 5.971 17.942C7.075 17.994 7.461 18 10 18C12.474 18 12.878 17.993 14.029 17.942C14.811 17.905 15.338 17.8 15.826 17.611C16.259 17.442 16.574 17.241 16.906 16.909C17.243 16.572 17.444 16.259 17.61 15.829C17.8 15.336 17.906 14.809 17.942 14.029C17.994 12.925 18 12.539 18 10C18 7.526 17.993 7.122 17.942 5.971C17.905 5.189 17.8 4.661 17.61 4.173C17.4593 3.765 17.2191 3.39596 16.907 3.093C16.6047 2.77985 16.2355 2.53917 15.827 2.389C15.337 2.199 14.811 2.094 14.029 2.058C12.925 2.006 12.539 2 10 2ZM10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 17.938C13.0173 17.6813 14.8611 16.6661 16.1568 15.0988C17.4525 13.5314 18.1027 11.5295 17.9754 9.49997C17.848 7.47041 16.9527 5.56549 15.4713 4.17238C13.9898 2.77927 12.0336 2.00252 10 2C7.96396 1.99848 6.00395 2.77334 4.51934 4.16668C3.03473 5.56002 2.13724 7.46699 2.00974 9.49904C1.88225 11.5311 2.53434 13.5353 3.83314 15.1033C5.13195 16.6712 6.97974 17.685 9 17.938V12H7V10H9V8.346C9 7.009 9.14 6.524 9.4 6.035C9.65611 5.55119 10.052 5.15569 10.536 4.9C10.918 4.695 11.393 4.572 12.223 4.519C12.552 4.498 12.978 4.524 13.501 4.599V6.499H13C12.083 6.499 11.704 6.542 11.478 6.663C11.3431 6.73236 11.2334 6.84215 11.164 6.977C11.044 7.203 11 7.427 11 8.345V10H13.5L13 12H11V17.938ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <Link>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM6.939 15.9003C6.05107 14.0169 5.53668 11.9792 5.4243 9.9H1.8558C2.03093 11.285 2.60453 12.5893 3.50691 13.6545C4.40929 14.7197 5.60161 15.4999 6.939 15.9003ZM7.227 9.9C7.3629 12.0951 7.9902 14.157 9 15.9768C10.0371 14.1089 10.6429 12.0325 10.773 9.9H7.227ZM16.1442 9.9H12.5757C12.4633 11.9792 11.9489 14.0169 11.061 15.9003C12.3984 15.4999 13.5907 14.7197 14.4931 13.6545C15.3955 12.5893 15.9691 11.285 16.1442 9.9ZM1.8558 8.1H5.4243C5.53668 6.02081 6.05107 3.98312 6.939 2.0997C5.60161 2.50009 4.40929 3.28028 3.50691 4.34547C2.60453 5.41065 2.03093 6.71499 1.8558 8.1ZM7.2279 8.1H10.7721C10.6423 5.96754 10.0368 3.89118 9 2.0232C7.96291 3.8911 7.3571 5.96747 7.227 8.1H7.2279ZM11.061 2.0997C11.9489 3.98312 12.4633 6.02081 12.5757 8.1H16.1442C15.9691 6.71499 15.3955 5.41065 14.4931 4.34547C13.5907 3.28028 12.3984 2.50009 11.061 2.0997Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="mt-[30px] md:hidden">
                  <div className="location-info text-[#fff] flex gap-[12px]">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18.9L13.95 13.95C14.9289 12.971 15.5955 11.7237 15.8656 10.3659C16.1356 9.00801 15.9969 7.60058 15.4671 6.32154C14.9373 5.0425 14.04 3.94929 12.8889 3.18015C11.7378 2.41101 10.3844 2.00049 9 2.00049C7.61557 2.00049 6.26222 2.41101 5.11109 3.18015C3.95996 3.94929 3.06275 5.0425 2.53292 6.32154C2.00308 7.60058 1.86442 9.00801 2.13445 10.3659C2.40449 11.7237 3.07111 12.971 4.05 13.95L9 18.9ZM9 21.728L2.636 15.364C1.37734 14.1053 0.520187 12.5017 0.172928 10.7558C-0.17433 9.01001 0.00390685 7.20041 0.685099 5.55588C1.36629 3.91136 2.51984 2.50575 3.99988 1.51683C5.47992 0.527899 7.21998 6.10352e-05 9 6.10352e-05C10.78 6.10352e-05 12.5201 0.527899 14.0001 1.51683C15.4802 2.50575 16.6337 3.91136 17.3149 5.55588C17.9961 7.20041 18.1743 9.01001 17.8271 10.7558C17.4798 12.5017 16.6227 14.1053 15.364 15.364L9 21.728ZM9 11C9.53044 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53042 11 8.99998C11 8.46955 10.7893 7.96084 10.4142 7.58577C10.0391 7.2107 9.53044 6.99998 9 6.99998C8.46957 6.99998 7.96086 7.2107 7.58579 7.58577C7.21072 7.96084 7 8.46955 7 8.99998C7 9.53042 7.21072 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11ZM9 13C7.93914 13 6.92172 12.5786 6.17158 11.8284C5.42143 11.0783 5 10.0608 5 8.99998C5 7.93912 5.42143 6.9217 6.17158 6.17156C6.92172 5.42141 7.93914 4.99998 9 4.99998C10.0609 4.99998 11.0783 5.42141 11.8284 6.17156C12.5786 6.9217 13 7.93912 13 8.99998C13 10.0608 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      <a
                        href={"https://yandex.uz/maps/-/CHqEBH0a"}
                        target="_blank"
                      >
                        <p>ул.Уста Ширин, рынок </p>
                        <p>Джамий, дом 134 </p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[77px] flex justify-between items-center gap-[10px] sm:gap-[10px] md:gap-[26px]">
            <span className="line bg-[#fff] h-[2px] w-[100%]"></span>
            <p className="text-[#fff] flex-shrink-0 text-center text-[12px] sm:text-[18px]">
              {new Date().getFullYear()} Teplodom. Все права защищены <br />
            </p>
            <span className="line bg-[#fff] h-[2px] w-[100%]"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
