import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ServiceFood = () => {
  const { _id, img, price, title, rating, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.name.value}`;
    const email = user?.email || "unregistered";
    const rating = form.rating.value;
    const message = form.message.value;
    const photoURL = form.photoURL.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      rating,
      message,
      photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <figure className="">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Price: {price}</h2>
        <h2 className="card-title">
          Rating: <span className="text-orange-600">{rating}</span>
        </h2>
        <p>{description}</p>
      </div>
      <h1 className="text-4xl font-semibold text-center my-8">Review Us</h1>
      <div>
        <form onSubmit={handlePlaceOrder} className="my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
            />
            <input
              name="photoURL"
              type="photoURL"
              placeholder="photoURL"
              className="input input-bordered w-full"
            />
            <input
              name="rating"
              type="text"
              placeholder="Rate Us"
              className="input input-bordered w-full"
              required
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Your Message"
            required
          ></textarea>
          <input className="btn" type="submit" value="place your order" />
        </form>
      </div>
    </div>
  );
};

export default ServiceFood;
