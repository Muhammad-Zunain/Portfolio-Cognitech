import React from "react";
import "./ServicesOffer.css";

import ServiceCustomDevelopment from "../../assets/service5.png";
import ServiceMobileDevelopment from "../../assets/service4.png";
import ServiceBackendDevelopment from "../../assets/service3.png";
import ServiceFrontendDevelopment from "../../assets/service2.png";
import ServiceUIDevelopment from "../../assets/service1.png";
import ServiceCigitalMarketing from "../../assets/service6.png";

const ServicesOffer = () => {
  const servicesData = [
    {
      title: "Custom Management System",
      description:
        "Empowering your projects with expert precision and creativity, we deliver tailored solutions and seamless execution to maximize efficiency and meet your business needs.",
      image: ServiceCustomDevelopment,
      services: ["WordPress", "Shopify", "Webflow", "..."],
    },
    {
      title: "UI/UX Design",
      description:
        "We turn your ideas into eye-catching designs. Our focus is on making designs that users love, with interfaces that are easy to understand. This not only connects with your audience but also enhances how people see your brand.",
      image: ServiceUIDevelopment,
      services: ["Figma", "Adobe XD", "..."],
    },
    {
      title: "Mobile Development",
      description:
        "We use Flutter to create high-performance, cross-platform mobile apps that work seamlessly on all devices. Our scalable and flexible solutions cater to industries of all sizes, from startups to enterprises.",
      image: ServiceMobileDevelopment,
      services: ["Flutter", "React Native", "..."],
    },
    {
      title: "Front-end Development",
      description:
        "We craft visually stunning, responsive front-end solutions with intuitive interfaces, delivering seamless experiences and flawless performance across all devices.",
      image: ServiceFrontendDevelopment,
      services: ["React js", "Next js", "Angular js", "Vue js", "..."],
    },
    {
      title: "Back-end Development",
      description:
        "We build robust, secure, and scalable back-end systems that ensure seamless performance and data handling, empowering businesses to grow and adapt with the latest technologies.",
      image: ServiceBackendDevelopment,
      services: ["Node js", "Laravel", "Django", "..."],
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with our smart digital marketing plans. We enhance visibility and engagement, attracting more customers to your brand and driving business growth in the digital landscape.",
      image: ServiceCigitalMarketing,
      services: ["SEO", "..."],
    },
  ];

  return (
        <div className="service-provide">
          {servicesData.map((service, index) => (
            <div className="service-main" key={index} data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
              <div className="service-content">
                <img
                  src={service.image}
                  className="service-technology-img"
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="services">
                  {service.services.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  );
};

export default ServicesOffer;
