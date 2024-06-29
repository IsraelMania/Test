import React from "react";
import Banner from "../components/project/Banner";
import BannerDouble from "../components/project/BannerDouble";
import Brands from "../components/project/Brands";
import Deals from "../components/project/Deals";
import Facilities from "../components/project/Facilities";
import Footer from "../components/project/Footer";
import Header from "../components/project/Header";
import Hero from "../components/project/Hero";
import Shelf from "../components/project/Shelf";
import TalkToUs from "../components/project/TalkToUs";
import Testimony from "../components/project/Testimony";
import TopBar from "../components/project/TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Facilities />
      <Hero />
      <Deals />
      <Shelf />
      <Banner />
      <Shelf />
      <Banner />
      <Shelf />
      <BannerDouble />
      <Brands />
      <Testimony />
      <TalkToUs />
      <Footer />
    </>
  );
};

export default Home;
