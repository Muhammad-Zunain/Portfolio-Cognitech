import React from "react";
import ServiceImage from "../../assets/allServices.jpeg";

const AllServices = () => {
  return (
    <>
      <div className="f-header">
        <img src={ServiceImage} alt={"hello"} />
        <div className="f-wrapper">
          <h2>All Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            unde corrupti necessitatibus fugit tempore, sit consequatur modi
            laborum optio provident.
          </p>
        </div>
      </div>

    </>
  );
};

export default AllServices;
