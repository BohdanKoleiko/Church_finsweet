import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Home from "./Home.tsx";
import AboutUs from "./AboutUs.tsx";
import Sermon from "./Sermon.tsx";
import Blog from "./Blog.tsx";
import NotFound from "./NotFound.tsx";
import "./App.scss";

function App() {
   const [pageBackgroundColor, setPageBackgroundColor] = useState({ backgroundColor: "" });

   const handleBgColor = function (color: string) {
      if (pageBackgroundColor.backgroundColor !== color) {
         setPageBackgroundColor({ ...pageBackgroundColor, backgroundColor: color });
      }
   };

   return (
      <BrowserRouter>
         <div className="app" style={pageBackgroundColor}>
            <Header onClick={handleBgColor} />
            <Routes>
               <Route path="/" element={<Home setBGColor={handleBgColor} />} />
               <Route path="/about-us" element={<AboutUs setBGColor={handleBgColor} />} />
               <Route path="/sermon" element={<Sermon setBGColor={handleBgColor} />} />
               <Route path="/blog" element={<Blog setBGColor={handleBgColor} />} />
               <Route path="*" element={<NotFound setBGColor={handleBgColor} />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
