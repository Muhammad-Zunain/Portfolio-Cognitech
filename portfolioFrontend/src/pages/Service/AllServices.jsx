import React, {useEffect} from "react";
import service from "../../assets/all-service.jpg";
import ServicesOffer from "../../components/ServicesOffer/ServicesOffer";
import QuickContact from "../../components/QuickContact/QuickContact";

const AllServices = () => {

  useEffect(() => {
    AOS.init();
  }, []);

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
        <div className="f-wrapper"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <h2>All Services</h2>
          <p>
          We empower businesses with innovative, user-centric solutions, seamless digital experiences, and strategic growth through expert-driven development, design, and marketing.
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
