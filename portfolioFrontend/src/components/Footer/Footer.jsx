import React , {useEffect} from "react";

import logo from "../../assets/logo_footer_rm.png";
import { Link } from "react-router-dom";

import "./Footer.css";
import { useProjectStore } from "../../store/useProjectStore";
import slugify from "slugify";

const Footer = () => {
  const { allCategories } =
    useProjectStore();

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <div style={{ backgroundColor: "#1e143b" }}>
      <div className="footer-container container">
        <div className="footer-upper" data-aos="flip-up">
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
                Kodonex is a leading software company specializing in web and
                mobile solutions. We deliver innovative, scalable, and
                user-focused digital experiences to empower businesses in the
                digital era.
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
                    to={`/service/${slugify(category.name, {
                      lower: true,
                    })}`}
                    onClick={() => {
                      handleClick();
                      handleServiceName(category.name);
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <i className="fa-solid fa-angle-right"></i>
                <Link
                  to="/service/all-service"
                  onClick={() => {
                    handleClick();
                  }}
                  className="service-link"
                >
                  All Services
                </Link>
                
              </li>
            </ul>
          </div>
          <div className="footer-4 footer">
            <h3>
              <span class="about-line"></span>Contact
            </h3>
            <ul>
              <li>
                <i class="fa-solid fa-phone"></i>+92 306 2860258
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>cognitechlabz@gmail.com
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <p>Copyright &copy; 2025 Kodonex | All Right Reserved</p>
        </div>
        <div className="footer-bottom-2" >
          <p>Powered By Kodonex</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
