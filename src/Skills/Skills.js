import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact ,faBootstrap} from '@fortawesome/free-brands-svg-icons';
import img1 from '../Assests/Skills/tailwind.png';
import img2 from '../Assests/Skills/java.png';
import img3 from '../Assests/Skills/springboot.png';
import img4 from '../Assests/Skills/springdata.png';
import img5 from '../Assests/Skills/springsecurity.png';
import img6 from '../Assests/Skills/gradle.png';
import img7 from '../Assests/Skills/linux.png';



const Skills = () => {
  return (
    <>
    <section class="mt-20">
          <h2 className="text-4xl font-extrabold ml-7 text-center mb-5 text-blue-400 underline decoration-1">
            Skills
          </h2>

          <section className=' flex m-5 justify-evenly'>
          <main className=' border rounded-xl'>
            <main>

            <button class="relative inline-flex items-center justify-center p-1 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faHtml5} size="2xl" style={{color: "#ff7300",}} className='h-20' />
              <h2 className=''>Html</h2>

              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#0068f0",}} className='h-20' />
              <h2 className=''>Css</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faSquareJs} size="2xl" style={{color: "#ffea00",}} className='h-20'/>
              <h2 className=''>JavaScript</h2>
              </span>
            </button>
            </main>

            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#00ffb3",}} className='h-16' />
              <h2 className=''>React.js</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative p-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <img src={img1} alt="TailwindCss" className=' w-28 h-20'/> 
              <h2 className=''>TailwindCSS</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FontAwesomeIcon icon={faBootstrap} size="2xl" style={{color: "#e647a4",}} className='h-16'/>
              <h2 className=''>BootStrap</h2>
              </span>
            </button>
            
          </main>

          <section >
            <img src="https://media.licdn.com/dms/image/D4D12AQG2-3Vm_jyYIw/article-cover_image-shrink_600_2000/0/1693753179836?e=2147483647&v=beta&t=XR0NwEBapgyMfEor_5WiyLKiyQzwoPKtp6EKkXY_zpQ" alt="developer" className=' rounded-3xl h-40' />
          </section>

          <main className='border rounded-xl'>
            <main>

          <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img2} alt="java" className='h-16' />
              <h2 className='mt-1.5'>Java</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-1.5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img3} alt="springBoot" className='h-16 w-24 ' />
              <h2 className='mt-1.5'>Springboot</h2>

              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img7} alt="Linux" className='h-16' />
              <h2 className='mt-1.5'>Linux</h2>
              </span>
            </button>
            </main>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img4} alt="SpringData" className='h-16' /> 
              <h2 className=''>Spring <br />Data</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span class="relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img6} alt="Gradle" className='h-20' />
              <h2 className=''>Gradle</h2>
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <img src={img5} alt="SpringSecurity" className='h-20' />
              <h2 className=''>Spring <br />Security</h2>
              </span>
            </button>
          </main>

          </section>
        </section>
    </>
  )
}

export default Skills