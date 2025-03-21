import React from "react";
import { FaUsersCog, FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
export default function QuickContact() {
  return (
    <div className="bg-[#1E143B] text-white py-16 px-8 md:px-10 lg:px-36 md:py-24 ">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:items-start lg:justify-evenly gap-12 justify-center items-center">
        <div className="md:max-w-[600px] sm:max-w-[400px] pt-4 space-y-6 md:text-left md:pt-20">
          <div className="flex items-center md:justify-start gap-3 text-[#fff] text-2xl font-medium">
            <FaUsersCog className="text-[#6e1299] text-4xl md:text-6xl" />
            <p className="text-[#6e1299]">Connect with our experts:</p>
          </div>
          <h2 className="text-5xl md:text-7xl">Quick Contact</h2>
          <p className="leading-relaxed">
            We are always here to help you. Connect with us and let us know how
            we can assist you.
          </p>
          {/* <div className="flex-col items-center gap-3"> */}
            <div className="flex items-center  md:justify-start gap-3">
              <FaPhoneAlt className="text-[#6e1299] text-3xl" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center  md:justify-start gap-3">
              <FaHeadset className="text-[#6e1299] text-3xl" />
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center  md:justify-start gap-3">
              <FaEnvelope className="text-[#6e1299] text-3xl" />
              <p>Kodonex.dev@gmail.com</p>
            </div>
          {/* </div> */}
        </div>

        <div className="bg-[#6e1299] shadow-lg p-8 w-full max-w-[400px] rounded-lg ">
          <form className="space-y-5">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent transition duration-300 ease-in-out w-full px-5 py-5 border-2 border-white rounded-lg focus:outline-none text-[1.3rem] md:py-6 lg:py-7 md:text-[1.5rem]"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent w-full px-5 py-5 border-2 border-white rounded-lg focus:outline-none text-[1.3rem] transition duration-300 ease-in-out md:max-w-[600px]md:py-6 lg:py-7 md:text-[1.5rem]"
              />
            </div>
            <div className="form-group">
              <textarea
                cols="30"
                rows="8"
                placeholder="Your Message"
                className="bg-transparent w-full px-5 py-5 border-2 border-white rounded-lg focus:outline-none text-[1.3rem] md:text-[1.5rem] transition duration-300 ease-in-out"
              ></textarea>
            </div>
            <button type="submit" className="primary-button">
              <span className="top"></span>
              <span
                className="primary-button-text font-normal "
                style={{ color: "#fff" }}
              >
                Send Message
              </span>
              <span className="bottom"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
