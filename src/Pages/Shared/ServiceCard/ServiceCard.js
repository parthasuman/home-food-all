import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, rating, description } = service;
  return (
    <div className="card w-80  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <p>Rating: {rating}</p>
        <p>
          {description.length > 70 ? (
            <>{description.slice(0, 70) + "..."}</>
          ) : (
            <>{description}</>
          )}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/servicefood/${_id}`}>
            <button className=" btn btn-warning">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
