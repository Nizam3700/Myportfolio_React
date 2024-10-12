import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="mt-12">
        <h2 className="text-4xl font-extrabold text-center mb-5 text-blue-400 underline decoration-1">
          Get in Touch
        </h2>
        <main className="text-center font-sans align-middle md:flex md:flex-wrap flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 ">
          
          <div className="h-40 w-80 m-4 border rounded-2xl bg-slate-400 text-left">
            <div className="flex ml-6 mt-4">
              <FontAwesomeIcon icon={faLocationDot} size="2xl" className="h-10" style={{ color: "black" }} />
            </div>
            <h1 className="text-2xl font-bold ml-8 text-gray-800">Location</h1>
            <h1 className="text-xl font-bold ml-8 text-gray-600">Chittoor, Andhra Pradesh, India</h1>
          </div>

          <div className="h-40 w-80 m-4 border rounded-2xl bg-slate-400 text-left">
            <div className="flex ml-6 mt-4">
              <FontAwesomeIcon icon={faSquareWhatsapp} size="2xl" className="h-10" style={{ color: "#09d72b" }} />
            </div>
            <h1 className="text-2xl font-bold ml-8 text-gray-800">WhatsApp</h1>
            <h1 className="text-xl font-bold ml-8 text-gray-600">+91 739618XXXX</h1>
            <a href="https://wa.me/7396183700" target="_blank" className="inline-flex font-medium items-center ml-8 mt-2.5 text-blue-600 hover:underline">
              Message me
            </a>
          </div>

          <div className="h-40 w-80 m-4 border rounded-2xl bg-slate-400 text-left">
            <div className="flex ml-6 mt-4">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" className="h-10" style={{ color: "#116eb6" }} />
            </div>
            <h1 className="text-2xl font-bold ml-8 text-gray-800">LinkedIn</h1>
            <h1 className="text-xl font-bold ml-8 text-gray-600">Shaik Nizamuddin</h1>
            <a href="https://www.linkedin.com/in/nizam3700" target="_blank" className="inline-flex font-medium items-center ml-8 mt-2.5 text-blue-600 hover:underline">
              Profile
            </a>
          </div>

          <div className="h-40 w-80 m-4 border rounded-2xl bg-slate-400 text-left">
            <div className="flex ml-6 mt-4">
              <FontAwesomeIcon icon={faEnvelope} size="2xl" className="h-10" style={{ color: "#FF2424" }} />
            </div>
            <h1 className="text-2xl font-bold ml-8 text-gray-800">Gmail</h1>
            <h1 className="text-xl font-bold ml-8 text-gray-600">nizamuddin8637@gmail.com</h1>
            <a href="mailto:nizamuddin8637@gmail.com" target="_blank" className="inline-flex font-medium items-center ml-8 mt-2.5 text-blue-600 hover:underline">
              mail me
            </a>
          </div>

        </main>
      </section>
    </>
  );
};

export default Footer;
