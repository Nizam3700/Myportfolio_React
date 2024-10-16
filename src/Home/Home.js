import React from 'react'
import mypro from "../Assests/mypro.png";
import {FaRegEye} from "react-icons/fa";

const Home = () => {
  return (
    <>
    <h2
          class="text-4xl font-extrabold text-green-600 m-4 absolute left-2 md:ml-20"
          id="Home"
        >
          Welcome
        </h2>
        <main class=" block md:flex md:justify md:ml-10">
          <div class="ml-2 w-5/6">
            <h1 class="mt-16 text-white text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              I'm <span className="text-yellow-300">Shaik Nizamuddin</span>
            </h1>
            <p class="text-lg m-2 justify-normal font-normal text-gray-500 lg:text-xl dark:text-gray-400 md:ml-5 md:justify-normal">
            Passionate Full Stack Developer with expertise in building scalable, reliable software applications. Quick learner with hands-on experience in modern technologies like Java, Spring Boot, MongoDB, and React.js. Looking to leverage my skills to deliver high-quality software solutions. Recently graduated in 2024.My future goal is to build the application help to
              end billion of users.
            </p>

              <button
                type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
              >
            <a href="https://drive.google.com/file/d/1w9uf-T39_ekf8KobD5Co9gKfhsPr2BUX/view?usp=sharing" target='_blank'>
                View Resume {FaRegEye} 
            </a>
              </button>

            <figure class="max-w-screen-md mx-auto text-center m-2">
              <svg
                class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p class="text-2xl m-2 text-white italic font-medium text-gray-900 dark:text-white">
                  "Measuring
                  <span class="text-red-600"> programming progress </span>
                  by lines like Measuring
                  <span class="text-cyan-500"> aircraft building </span>
                  progress by weight."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://m.economictimes.com/thumb/msid-104763154,width-1200,height-1200,resizemode-4,imgsize-267720/bill-gates-5-frugal-habits-of-the-billionaire-you-may-know.jpg"
                  alt="bill gates image"
                />
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                  <cite class="pe-3 text-white font-medium text-gray-900 dark:text-white">
                    Bill Gates
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="">
            <img
              class="rounded-full w-96 h-96 items-center content-center m-auto md:mr-28 md:w-96"
              src={mypro}
              alt="image description"
            />
          </div>
        </main>
    </>
  )
}

export default Home