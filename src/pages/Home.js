import React, { Suspense } from "react";
//components

import BeanEater from "../assets/bean-eater.gif";

const Navigation = React.lazy(() => import("../components/Navigation"));
const HeroSection = React.lazy(() => import("../components/HeroSection"));

const Footer = React.lazy(() => import("../components/Footer"));
const Ribbon = React.lazy(() => import("../components/Ribbon"));
const Inspiration = React.lazy(() => import("../components/Inspiration"));
const Meta = React.lazy(() => import("../components/Meta"));

const Home = () => {
  return (
    <div className="w-full relative">
      <Suspense
        fallback={
          <div className="w-full h-[100vh] flex justify-center items-center">
            <img src={BeanEater} alt="bean-eater" />
          </div>
        }
      >
        <Navigation />
        <HeroSection />
        <Ribbon />
        <Inspiration />
        <Meta />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
