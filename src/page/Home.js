import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="container relative pt-20 pb-5  lg:pl-14 main-wrapper md:pl-12 pl-6">
      <section className="w-full h-full justify-center items-center lg:pt-40 md:pt-24 pt-24 ">
        <h1 className=" main-text uppercase">Reach your</h1>
        <h6 className="main-text uppercase">financial goals&nbsp;</h6>
        <h6 className="main-text uppercase">effortlessly</h6>

        <h6 className="sub-main-text3">
          Yahgrovest is an exclusive community that connects
          <h6 className="sub-main-text4">
            members to impact-driven opportunities with good returns
          </h6>
        </h6>
        <button className="home-btn sm:mb-5 animate-bounce">Join Now - Its Free</button>
      </section>
    </main>
  );
};

export default Home;
