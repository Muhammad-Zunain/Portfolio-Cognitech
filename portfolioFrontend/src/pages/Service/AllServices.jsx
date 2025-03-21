import React from "react";
import service from "../../assets/AllServices.jpeg";
import ServicesOffer from "../../components/ServicesOffer/ServicesOffer";

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
        <div className="main-service-wrapper">
          <ServicesOffer />
        </div>
      </div>
    </>
  );
};

export default AllServices;
