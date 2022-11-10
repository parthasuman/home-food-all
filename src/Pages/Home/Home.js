import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import ClientReview from "./ClientReview/ClientReview";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
