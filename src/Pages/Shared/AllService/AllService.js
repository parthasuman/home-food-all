import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-8">
      <div className="text-center">
        <p className="text-2xl font-Bold text-orange-600">Services</p>
        <h2 className="text-2xl font-semibold">Our Service Area</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, numquam, cupiditate incidunt neque corporis eveniet
          repellat qui molestias suscipit reprehenderit iusto et accusamus
          repellendus iure, maxime saepe voluptatibus iste debitis.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllService;
