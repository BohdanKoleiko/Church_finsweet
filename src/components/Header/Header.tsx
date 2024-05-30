import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button.tsx";
import "./Header.scss";

function Header(props) {
   const { onClick } = props;

   return (
      <header className="header">
         <div className="container">
            <div className="header__wrapper">
               <div className="header__logo-wrapper">
                  <figure className="header__logo">
                     <NavLink to="/">
                        <svg
                           width="134"
                           height="32"
                           viewBox="0 0 134 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M130.101 4.02048V11.4872H132.756V15.0974H130.101V21.8256C130.101 22.4821 130.266 22.9743 130.598 23.3025C130.93 23.6307 131.428 23.7949 132.092 23.7949C132.424 23.7949 134 23.7949 134 23.7949V28.0615C134 28.0615 131.096 28.0615 130.681 28.0615C129.354 28.0615 127.695 27.8154 126.533 26.7487C125.371 25.682 124.873 24.2872 124.873 22.3179V15.0154H122.467V11.4051H124.873V4.02048H130.101ZM114.585 28.3897C112.179 28.3897 110.104 27.5693 108.694 26.0923C107.2 24.6154 106.536 22.6461 106.536 20.3487V19.7744C106.536 17.2308 107.2 15.1795 108.528 13.5385C109.855 11.9795 111.764 11.159 114.253 11.159C116.493 11.159 118.319 11.8154 119.563 13.1282C120.891 14.5231 121.471 16.3282 121.471 18.6257V21.3333H111.93V21.4154C112.013 22.3179 112.427 22.8923 113.008 23.4667C113.589 24.041 114.419 24.2872 115.331 24.2872C116.327 24.2872 117.074 24.2051 117.655 24.041C118.235 23.8769 119.065 23.6308 119.895 23.2205L121.14 26.4205C120.393 26.9949 119.48 27.4051 118.319 27.8154C117.157 28.2257 115.83 28.3897 114.585 28.3897ZM114.17 15.0974C113.423 15.0974 112.842 15.3436 112.51 15.9179C112.179 16.4923 111.93 17.2308 111.846 18.0513L111.93 18.1333H116.41V17.7231C116.41 16.8205 116.244 16.2462 115.912 15.8359C115.415 15.2616 114.916 15.0974 114.17 15.0974ZM97.0776 28.3897C94.6714 28.3897 92.5968 27.5693 91.1865 26.0923C89.7762 24.6154 89.0292 22.6461 89.0292 20.3487V19.7744C89.0292 17.2308 89.6929 15.1795 91.0204 13.5385C92.348 11.9795 94.2565 11.159 96.7455 11.159C98.9862 11.159 100.811 11.8154 102.056 13.1282C103.3 14.441 103.964 16.3282 103.964 18.6257V21.3333H94.4226V21.4154C94.5053 22.3179 94.9203 22.8923 95.5013 23.4667C96.0817 24.041 96.9115 24.2872 97.8241 24.2872C98.8201 24.2872 99.5666 24.2051 100.148 24.041C100.729 23.8769 101.558 23.6308 102.388 23.2205L103.632 26.4205C102.885 26.9949 101.973 27.4051 100.811 27.8154C99.7327 28.2257 98.4051 28.3897 97.0776 28.3897ZM96.7455 15.0974C95.9989 15.0974 95.4179 15.3436 95.0863 15.9179C94.7542 16.4923 94.5053 17.2308 94.4226 18.0513L94.5053 18.1333H98.9862V17.7231C98.9862 16.8205 98.8201 16.2462 98.4879 15.8359C97.9902 15.2616 97.4925 15.0974 96.7455 15.0974ZM81.2301 21.0051L83.0553 11.3231H87.7844L83.9679 27.9795H79.5704L76.8326 19.118H76.7493L74.0115 27.9795H69.614L65.7142 11.4051H70.5266L72.3518 21.1692H72.4346L75.0902 11.4051H78.409L81.2301 21.0051ZM59.2421 23.3025C59.2421 22.8923 58.9932 22.4821 58.4956 22.1538C57.9979 21.8256 57.168 21.4974 55.9233 21.2513C54.015 20.841 52.5214 20.2667 51.5258 19.5282C50.5301 18.7077 50.0323 17.641 50.0323 16.2462C50.0323 14.7692 50.6961 13.5385 51.8577 12.4718C53.1023 11.4051 54.7618 10.9948 56.8359 10.9948C58.9932 10.9948 60.8184 11.4872 62.0632 12.4718C63.3907 13.4564 63.9717 14.6872 63.8884 16.3282V16.4102H58.9105C58.9105 15.7538 58.7444 15.2615 58.4122 14.9333C58.0806 14.6051 57.4996 14.441 56.8359 14.441C56.2554 14.441 55.8405 14.6051 55.4256 14.9333C55.0107 15.2615 54.8446 15.5898 54.8446 16.082C54.8446 16.5744 55.0934 16.9026 55.5084 17.2308C55.9233 17.559 56.8359 17.8051 58.0806 18.0513C60.0719 18.4615 61.6483 19.0359 62.5609 19.7744C63.5568 20.5949 64.0545 21.6615 64.0545 23.1385C64.0545 24.6154 63.3907 25.8462 62.0632 26.8307C60.7357 27.8154 58.9932 28.3077 56.8359 28.3077C54.5958 28.3077 52.7704 27.7333 51.4428 26.5846C50.1153 25.4359 49.5344 24.2051 49.6174 22.7282V22.6461H54.3469C54.3469 23.4667 54.5958 24.041 55.0934 24.2872C55.5917 24.5333 56.2554 24.8616 57.002 24.8616C57.7485 24.8616 58.2467 24.6974 58.5783 24.4513C59.076 24.2051 59.2421 23.7949 59.2421 23.3025ZM36.6737 11.3231L36.8397 13.6205C37.4205 12.8 38.0843 12.1436 38.831 11.7334C39.6608 11.241 40.4905 10.9948 41.4862 10.9948C43.0626 10.9948 44.3901 11.5692 45.3029 12.5539C46.2156 13.5385 46.7134 15.2615 46.7134 17.559V27.9795H41.6521V17.641C41.6521 16.6564 41.4861 16.082 41.0713 15.6718C40.6564 15.2615 40.0756 15.0974 39.3288 15.0974C38.831 15.0974 38.4162 15.1795 38.0013 15.3436C37.5864 15.5077 37.2546 15.7538 37.0056 16.082V28.0615H31.8613V11.4051H36.6737V11.3231ZM28.7084 8.20515H23.4811V4.02048H28.7084V8.20515ZM28.7084 28.0615H23.4811V11.4051H28.7084V28.0615ZM12.031 28.0615V14.9333H9.6248V11.3231H12.031V9.6C12.031 7.71283 12.6118 6.23591 13.6904 5.16926C14.852 4.1026 16.5945 3.85641 17.8391 3.85641C18.2539 3.85641 21.1579 3.85641 21.1579 3.85641V8.04102C21.1579 8.04102 19.5815 8.04102 19.2496 8.04102C18.5858 8.04102 18.088 8.20515 17.7561 8.53335C17.4242 8.86154 17.2582 9.35386 17.2582 10.0103V11.241H20.4942V14.8513H17.2582V27.8974H12.031V28.0615ZM2.07431 5.41539C2.07431 0.41026 4.72941 0 9.20994 0V3.93848C7.13561 3.93848 6.30588 4.26667 6.30588 5.49745V11.9795C6.30588 13.4564 6.38887 15.0154 5.14427 16C6.38887 16.9846 6.30588 18.4615 6.30588 20.0205V26.5026C6.30588 27.8154 7.13561 28.0615 9.20994 28.0615V32C4.72941 32 2.07431 31.5897 2.07431 26.5846V20.0205C2.07431 18.9539 2.07431 17.8051 0 17.8051V16.082V14.359C2.07431 14.359 2.07431 13.1282 2.07431 12.1436V5.41539Z"
                              fill="white"
                           />
                        </svg>
                     </NavLink>
                  </figure>
               </div>

               <div className="header__nav-wrapper">
                  <nav className="header__nav">
                     <NavLink to="/" className="header__nav-link" onClick={() => onClick("white")}>
                        Home
                     </NavLink>
                     <NavLink
                        to="/about-us"
                        className="header__nav-link"
                        onClick={() => onClick("white")}
                     >
                        About us
                     </NavLink>
                     <NavLink
                        to="/sermon"
                        className="header__nav-link"
                        onClick={() => onClick("white")}
                     >
                        Sermon
                     </NavLink>
                     <NavLink
                        to="/blog"
                        className="header__nav-link"
                        onClick={() => onClick("#F5F2F0")}
                     >
                        Blog
                     </NavLink>
                  </nav>

                  <Button btnPadding="p20" text="Contact us" classNames="header__contact-btn" />
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
