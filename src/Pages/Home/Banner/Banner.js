import React from "react";
import img1 from "../../../assets/images/banner/img1.jpg";
import img2 from "../../../assets/images/banner/img2.jpg";
import img3 from "../../../assets/images/banner/img3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-56 top-1/4">
          <h1 className="text-5xl font-bold text-white ">
            Affordable <br></br>
            Price for Pizza<br></br>
            Order NoW
          </h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} alt="" className="w-full" />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-56 top-1/4">
          <h1 className="text-5xl font-bold text-white ">
            Affordable <br></br>
            Price for Burger<br></br>
            Order NoW
          </h1>
          <button className="btn btn-info">Info</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>

          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-56 top-1/4">
          <h1 className="text-5xl font-bold text-white ">
            Affordable <br></br>
            Price for Grill<br></br>
            Order NoW
          </h1>
          <button className="btn btn-info">Info</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>

          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
