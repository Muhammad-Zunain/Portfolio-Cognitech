import React from "react";
import service from "../../assets/AllServices.jpeg";
import ServicesOffer from "../../components/ServicesOffer/ServicesOffer";
import QuickContact from "../../components/QuickContact/QuickContact";

const AllServices = () => {
  const containerStyles = {
    backgroundColor: "#1e143b",
    borderRadius: "8px",
    marginTop: "2rem",
    padding: "8rem 0 8rem 0",
    position: "relative",
    overflow: "hidden",
    marginBottom: "4rem",
  };
  return (
    <>
      <div className="f-header">
        <img src={service} alt="" />
        <div className="f-wrapper">
          <h2>All Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            unde corrupti necessitatibus fugit tempore, sit consequatur modi
            laborum optio provident.
          </p>
        </div>
      </div>
      <div className="container" style={containerStyles}>
        <div className="service-offer-wrapper pt-0 ">
          <div className="wrapper-inner">
            <span className="text-[1.5rem] tracking-wide font-semibold text-[#6e1299] md:text-3xl md:-mb-10">
              Our Areas Of Expertise
            </span>
            <h2>Transform Your Business with Expert Digital Solutions</h2>
            <p>
              We provide cutting-edge solutions tailored to your needs, from web
              and mobile development to UI/UX design, digital marketing, and
              beyond. Our expertise helps businesses innovate, scale, and
              achieve lasting success in the digital world.
            </p>
          </div>
        </div>
        <div className="main-service-wrapper">
          <ServicesOffer />
        </div>
      </div>
      <QuickContact />
    </>
  );
};

export default AllServices;
