import React from "react";
import pizza from "../../../assets/images/about/pizza.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div lassName="w-1/2">
            <img src={pizza} alt="" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2">
            <p className="text-2xl text-orange-600">About Us</p>
            <h1 className="text-5xl font-bold">Our home food !</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              pariatur optio nemo distinctio quam quod perspiciatis. Totam,
              laudantium odit illum quasi deserunt ullam, alias, magni tenetur
              ab voluptatem modi dolore!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
