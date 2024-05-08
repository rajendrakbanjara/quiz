import { LuPaintbrush2 } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { IoAccessibilityOutline } from "react-icons/io5";
import Link from "next/link";
import React from 'react';

interface ChildProps {
  chooseSubject: (subject: any) => void;
}

const Subjects: React.FC<ChildProps> = ({chooseSubject})=>{
    return(
        <div className="lg:flex lg:mt-28 mt-14 lg:justify-between">
          {/* left container */}
          <div className="">
            <div className="">
              <p className="lg:text-6xl text-4xl text-slate-600 dark:text-white font-light font-sans">
                Welcome to the
              </p>
              <p className="lg:text-7xl text-5xl text-slate-600 dark:text-white font-semibold font-sans">
                Frontend Quiz!
              </p>
              <p className="text-lg italic text-slate-500 dark:text-slate-400 font-sans mt-10">
                Pick a subject to get started.
              </p>
            </div>
          </div>
          {/* Right container */}
          <div className="SubjectList">
            <div>
              <ul className="space-y-4">
                <li onClick={()=> chooseSubject(1)}className="subList flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 lg:p-1.5 p-2 lg:w-[36rem] rounded-2xl lg:text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="subLogo bg-orange-100 lg:p-4 ml-2 lg:my-2 rounded-md  mr-7 lg:ext-2xl">
                    <FaCode color="orange" size="1.5rem" />
                  </div>
                   HTML
                </li>
                <li onClick={()=>chooseSubject(2) }className="subList flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 lg:w-[36rem] rounded-2xl lg:text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="subLogo bg-orange-100 lg:p-4 ml-2 lg:my-2 rounded-md  mr-7 lg:ext-2xl">
                    <LuPaintbrush2 color="Green" size="1.5rem" />
                  </div>{" "}
                  CSS
                </li>
                <li onClick={()=> chooseSubject(3)} className="subList flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 lg:w-[36rem] rounded-2xl lg:text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="subLogo bg-orange-100 lg:p-4 ml-2 lg:my-2 rounded-md  mr-7 lg:ext-2xl">
                    <RiJavascriptLine color="Blue" size="1.5rem" />
                  </div>
                  JavaScritp
                </li>
                <li onClick={()=> chooseSubject(4)} className="subList flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 lg:w-[36rem] rounded-2xl lg:text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="subLogo bg-orange-100 lg:p-4 ml-2 lg:my-2 rounded-md  mr-7 lg:ext-2xl">
                    <IoAccessibilityOutline size="1.5rem" color="purple" />
                  </div>
                  Accessibility
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}
export default Subjects;