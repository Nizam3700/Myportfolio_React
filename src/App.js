import { useRef, useState } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { FaDownload } from "react-icons/fa";
import myimage from "../src/Assests/myimage.png";

import ProCard from "./Project/ProCard";
import Home from "../src/Home/Home";
import Skills from "./Skills/Skills";
import Experience from "../src/Experience/Experience";
import Contact from "./Contact/Contact";

import projectsData from "./data/Projectdata";



function App() {
  const home = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const exp = useRef(null);
  const contacts = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);


  const [visibleCount, setVisibleCount] = useState(3); // Initial number of visible cards
  const projectRef = useRef(null);

  const showMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, projectsData.length)); // Show 3 more cards
  };

  const showLess = () => {
    setVisibleCount(3); // Reset to initial count
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        {/* navbar start  */}
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="header max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={myimage} className="h-14" alt="Flowbite Logo" />
              <span className="self-center text-white  text-2xl font-semibold whitespace-nowrap dark:text-white">
                Portfolio
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="https://drive.google.com/file/d/164QNUQq7WrqHPerVm_A6b6KJSD-CJI35/view?usp=sharing" target='_blank'>
              <button
                type="button"
                className="text-white m-2 flex bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
              >
                Resume <FaDownload className="ml-3 mt-1" />
              </button>
              </a>
              <button
                type="button"
                className="inline-flex m-2 bg-cyan-100 text-black items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={menuOpen}
                onClick={handleMenuClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                menuOpen ? "" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col py-4 m-2 text-black md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-600 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  onClick={() => scrollToSection(home)}
                  className="link m-1 text-cyan-200 hover:decoration-solid text-blue-500 "
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection(skills)}
                  className="link  m-1 text-cyan-200 hover:decoration-solid hover:text-blue-500 "
                >
                  Skills
                </li>
                <li
                  onClick={() => scrollToSection(project)}
                  className="link m-1 text-cyan-200 hover:decoration-solid hover:text-blue-500  "
                >
                  Projects
                </li>
                <li
                  onClick={() => scrollToSection(exp)}
                  className="link  m-1 text-cyan-200 hover:decoration-solid hover:text-blue-500  "
                >
                  Experenices
                </li>
                <li
                  onClick={() => scrollToSection(contacts)}
                  className="link  m-1 text-cyan-200 hover:decoration-solid hover:text-blue-500  "
                >
                  Contact Me
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* navbar start  */}

      <div ref={home} className="home">
        <h3>home</h3>
        {/* <!-- home start  --> */}
        <Home />
        {/* <!-- home end  --> */}
      </div>
      <div ref={skills} className="skills">
        <h3>skills</h3>
        {/* <!-- skills start --> */}
        <Skills />

        {/* <!-- skills end --> */}
      </div>

      <div ref={project} className="project">
        <h3>Projects</h3>
        {/* <!-- project start  --> */}

        <h2
          class="text-4xl font-extrabold text-green-600 ml-7"
          id="Project"
        ></h2>
        <main class="mt-20">
          <h2 class="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1">
            Projects
          </h2>
          {/* <!-- other diev  --> */}
          {/* grid grid-flow-row md:flex md:mr-20 */}
          <section ref={projectRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.slice(0, visibleCount).map((project) =>(
            <ProCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              projectLink={project.projectLink}
              tag1={project.tag1}
              tag2={project.tag2}
              tag3={project.tag3}
              tag4={project.tag4}
              tag5={project.tag5}
              tag6={project.tag6}
              tag7={project.tag7}
              tag8={project.tag8}
              tag9={project.tag9}
              tag10={project.tag10}
              projectDate={project.projectDate}
              codeLink={project.codeLink}
            />
          ))}
            {/* <ProCard />
            <ProCard />
            <ProCard /> */}

          </section>
          {visibleCount < projectsData.length && (
            <div className="flex justify-center mt-5">
              <button
                onClick={showMore}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Show More
              </button>
            </div>
          )}
          {visibleCount > 3 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={showLess}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Show Less
              </button>
            </div>
          )}
        </main>
        {/* <!-- project end  --> */}
      </div>

      <div ref={exp} className="exp">
        <h3>Exprience</h3>
        {/* <!-- exp start  --> */}
        <Experience />
        {/* <!-- exp end  --> */}
      </div>
      <div ref={contacts} className="contacts">
        
        {/* <!-- contacts start  --> */}
        <h3>Contact me</h3>
        <Contact/>
        {/* <!-- contacts end  --> */}
      </div>

      {/* footer start  */}

      <footer class="bg-grey-900 text-white rounded-lg mt-28 shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="#" onClick={() => scrollToSection(home)}
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={myimage} class="h-12" alt="my Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Portfolio
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li onClick={() => scrollToSection(home)} class="hover:underline me-4 md:me-6">
                  About
              </li>
              <li onClick={() => scrollToSection(skills)} class="hover:underline me-4 md:me-6">
                  Skills
              </li>
              <li onClick={() => scrollToSection(project)} class="hover:underline me-4 md:me-6">
                  Projects
              </li>
              <li onClick={() => scrollToSection(exp)} class="hover:underline me-4 md:me-6">
                  Experience
              </li>
              <li onClick={() => scrollToSection(contacts)} class="hover:underline me-4 md:me-6">
                  Contact Me
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      {/* footer end  */}
    </div>
  );
}

export default App;
