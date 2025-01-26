import React from "react";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./Footer.css";
import { useProjectStore } from "../../store/useProjectStore";
import slugify from "slugify";

const Footer = () => {
  const { projects, setServiceName, setProjects, allCategories } = useProjectStore();

  return (
    <div style={{ backgroundColor: "#1e143b" }}>
      <div className="footer-container container">
        <div className="footer-upper">
          <div className="footer-upper-1">
            <h4>Follow Our Social Network</h4>
            <div className="footer-lower">
              <Link>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-facebook-messenger"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>

          <div className="footer-upper-2">
            <img src={logo} alt="Cognitech Labz Logo" />
          </div>

          <div className="footer-upper-3">
            <h4>Email</h4>
            <div className="footer-upper-3-wrapper">
              <a href="mailto:cognitechlabz@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <p>
                <a href="mailto:cognitechlabz@gmail.com">
                  cognitechlabz@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-1 footer">
            <div>
              <h3>
                <span class="about-line"></span>About
              </h3>
            </div>
            <div className="footer-1-content">
              <p>
              Cognitech Labs is a leading software company specializing in web and mobile solutions. We deliver innovative, scalable, and user-focused digital experiences to empower businesses in the digital era.
              </p>
            </div>
          </div>
          <div className="footer-2 footer">
            <h3>
              <span class="about-line"></span>Services
            </h3>
            <ul>
              {allCategories.map((category, index) => (
                <li key={index}>
                  <i className="fa-solid fa-angle-right"></i>
                  <Link
                    to={`/service/${slugify(category.extra.name, {
                      lower: true,
                    })}`}
                    onClick={() => {
                      handleClick();
                      handleServiceName(category.extra.name);
                    }}
                  >
                    {category.extra.name}
                  </Link>
                </li>
              ))}
{/* 
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <Link>Mobile App Development</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <Link>Front End Development</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <Link>Back End Development</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <Link>Full Stack Development</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
                <Link>UI/UX Design</Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-4 footer">
            <h3>
              <span class="about-line"></span>Contact
            </h3>
            <ul>
              <li>
                <i class="fa-solid fa-phone"></i>+92 33333333
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>cognitechlabz@gmail.com
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>ABC Street Number Malir,
                Karachi
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <p>Copyright &copy; 2025 Cognitech Labs | All Right Reserved</p>
        </div>
        <div className="footer-bottom-2">
          <p>Powered By Cognitech</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
