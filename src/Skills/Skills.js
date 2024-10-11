import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../Assests/Skills/tailwind.png";
import img2 from "../Assests/Skills/java.png";
import img3 from "../Assests/Skills/springboot.png";
import img4 from "../Assests/Skills/springdata.png";
import img5 from "../Assests/Skills/springsecurity.png";
import img6 from "../Assests/Skills/gradle.png";
import img7 from "../Assests/Skills/linux.png";
import img8 from "../Assests/Skills/lombok.png";
import img9 from "../Assests/Skills/git.png";
import img10 from "../Assests/Skills/github.png";
import img11 from "../Assests/Skills/docker.png";
import img12 from "../Assests/Skills/apis.png";
import img13 from "../Assests/Skills/testing.png";
import img14 from "../Assests/Skills/mysql.png";
import img15 from "../Assests/Skills/mongodb.png";
import img16 from "../Assests/Skills/python.png";
import img17 from "../Assests/Skills/hibernate.png";
import img18 from "../Assests/Skills/http.png";
import img19 from "../Assests/Skills/netlify.png";

const Skills = () => {
  return (
    <>
      <section class="mt-20">
        <h2 className="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1">
          Skills
        </h2>

        <section className="flex justify-center gap-3 inline-grid lg:flex lg:flex-wrap 2xl:flex 2xl:flex-wrap
        ">
          {/* right side  */}
          <main className="border rounded-xl p-3 inline-grid">
            {/* first line right start */}
            <main className=" flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-x-24">

              <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">
              <button class="relative inline-flex items-center justify-center p-1 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="2xl"
                    style={{ color: "#ff7300" }}
                    className="h-20"
                    />
                  <h2 className="">Html</h2>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="2xl"
                    style={{ color: "#0068f0" }}
                    className="h-20"
                    />
                  <h2 className="">Css</h2>
                </span>
              </button>
              </div>
              
            <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">
              <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    size="2xl"
                    style={{ color: "#ffea00" }}
                    className="h-20"
                    />
                  <h2 className="">JavaScript</h2>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <FontAwesomeIcon
                    icon={faReact}
                    size="2xl"
                    style={{ color: "#00ffb3" }}
                    className="h-16"
                    />
                  <h2 className="">React.js</h2>
                </span>
              </button>
            </div>
            </main>
            {/* first line right end */}

            {/* Second line right start */}
            <main className="flex flex-wrap mt-1 gap-2 md:gap-4 lg:gap-4 2xl:gap-x-24">
            <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">

              <button class="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative px-2 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img1} alt="TailwindCss" className="h-12 w-16" />
                  <h2 className="mt-1.5 text-center">TailwindCSS</h2>
                </span>
              </button>

              <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2xl"
                    style={{ color: "#e647a4" }}
                    className="h-16"
                  />
                  <h2 className="">Bootstrap</h2>
                </span>
              </button>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">

              <button class="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img15} alt="Mongodb" className="h-16 w-16" />
                  <h2 className="mt-1.5 text-center">MongoDB</h2>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-1 ml-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img12} alt="RestAPI" className="h-16 w-16" />
                  <h2 className="mt-1 text-center">RestAPIs</h2>
                </span>
              </button>
              </div>
            </main>
            {/* Second line right end */}

            {/* Third line right start */}
            <main className="flex flex-wrap mt-4 gap-2 md:gap-4 lg:gap-4 2xl:gap-x-24">
              
            <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">

              <button class="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img18} alt="Http" className="h-16 w-16" />
                  <h2 className="mt-1 text-center">HTTP</h2>
                </span>
              </button>

              <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <img src={img9} alt="git" className="h-16" />
                  <h2 className="">Git</h2>
                </span>
              </button>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-4 lg:gap-4 2xl:gap-4">

              <button class="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img10} alt="GitHub" className="h-16 w-16" />
                  <h2 className="mt-1.5 text-center">GitHub</h2>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-1 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img src={img19} alt="Netlify" className="h-16 w-16" />
                  <h2 className="mt-1 text-center">Netlify</h2>
                </span>
              </button>
              </div>
              {/* Third line right end */}
            </main>
          </main>

          <section className=" flex justify-center rounded-3xl inline-grid">
            {/* <img
              src="https://media.licdn.com/dms/image/D4D12AQG2-3Vm_jyYIw/article-cover_image-shrink_600_2000/0/1693753179836?e=2147483647&v=beta&t=XR0NwEBapgyMfEor_5WiyLKiyQzwoPKtp6EKkXY_zpQ"
              alt="developer"
              className=" rounded-3xl h-60"
            /> */}
            <img
              src="https://chools.in/wp-content/uploads/f5.gif"
              alt="developer"
              className=" rounded-3xl h-80 items-center"
            />
            <div className=" justify-center lg: text-2xl font-bold text-blue-200">
             <h1>Front-End</h1>
             <h1>Back-End</h1>
             <h1>Full Stack Developer</h1>
            </div>
          </section>

          {/* Left Side */}
          <main className="border rounded-xl p-3">
            {/* Left Side First Start */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Java Button */}
              <button className="relative inline-flex items-center justify-center p-1  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-4 py-4 -mb-15 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img2}
                    alt="Java"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Java</h2>
                </span>
              </button>

              {/* Springboot Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img3}
                    alt="Spring Boot"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Spring Boot</h2>
                </span>
              </button>

              {/* Linux Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img7}
                    alt="Linux"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Linux</h2>
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img4}
                    alt="Spring Data"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">
                    Spring <br />
                    Data
                  </h2>
                </span>
              </button>
            </div>
            {/* Left Side First End */}

            {/* Left Side Second Start */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* SpringData Button */}

              {/* Gradle Button */}
              <button className="relative inline-flex items-center justify-center p-1  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative  px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img6}
                    alt="Gradle"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Gradle</h2>
                </span>
              </button>

              {/* Spring Security Button */}
              <button className="relative inline-flex items-center justify-center p-1.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img5}
                    alt="Spring Security"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">
                    Spring <br />
                    Security
                  </h2>
                </span>
              </button>
              {/* Left Side Second End */}

              {/* Left Side Third Start */}
              {/* Lombok Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img8}
                    alt="Lombok"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Lombok</h2>
                </span>
              </button>

              {/* MySQL Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img14}
                    alt="MySQL"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">MySQL</h2>
                </span>
              </button>

              {/* Left Side Third End */}
            </div>

            {/* Left Side Fourth Start */}
            <div className="flex flex-wrap gap-4">
              {/* Testing Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img13}
                    alt="JUnit & Mockito"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">
                    JUnit & <br />
                    Mockito
                  </h2>
                </span>
              </button>
              {/* Python Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img16}
                    alt="Python"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Python</h2>
                </span>
              </button>

              {/* Hibernate Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img17}
                    alt="Hibernate"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Hibernate</h2>
                </span>
              </button>

              {/* Docker Button */}
              <button className="relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-4 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-col items-center">
                  <img
                    src={img11}
                    alt="Docker"
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="mt-2 text-center">Docker</h2>
                </span>
              </button>
            </div>
            {/* Left Side Fourth End */}
          </main>
        </section>
      </section>
    </>
  );
};

export default Skills;
