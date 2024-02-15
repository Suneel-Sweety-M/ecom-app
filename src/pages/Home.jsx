import React from "react";
import "../styles/home.css";
import Categories from "../components/Categories";
import SliderCard from "../components/SliderCard";

const Home = () => {
  return (
    <section className="home">
      <div className="container d_flex">
        <Categories />
        <SliderCard />
      </div>
    </section>
  );
};

export default Home;
