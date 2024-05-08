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
        <div className="flex mt-28 justify-between">
          {/* left container */}
          <div className="">
            <div className="">
              <p className="text-6xl text-slate-600 dark:text-white font-light font-sans">
                Welcome to the
              </p>
              <p className="text-7xl text-slate-600 dark:text-white font-semibold font-sans">
                Frontend Quiz!
              </p>
              <p className="text-lg italic text-slate-500 dark:text-slate-400 font-sans mt-10">
                Pick a subject to get started.
              </p>
            </div>
          </div>
          {/* Right container */}
          <div>
            <div>
              <ul className="space-y-4">
                <li onClick={()=> chooseSubject(1)}className="flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 w-[36rem] rounded-2xl text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="bg-orange-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl">
                    <FaCode color="orange" size="25px" />
                  </div>
                   HTML
                </li>
                <li onClick={()=>chooseSubject(2) }className="flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 w-[36rem] rounded-2xl text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="bg-green-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl">
                    <LuPaintbrush2 color="Green" size="25px" />
                  </div>{" "}
                  CSS
                </li>
                <li onClick={()=> chooseSubject(3)} className="flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 w-[36rem] rounded-2xl text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="bg-blue-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl">
                    <RiJavascriptLine color="Blue" size="25px" />
                  </div>
                  JavaScritp
                </li>
                <li onClick={()=> chooseSubject(4)} className="flex items-center font-bold text-slate-600 dark:text-white bg-slate-100 dark:bg-slate-600 p-1.5 w-[36rem] rounded-2xl text-2xl hover:border-purple-600 hover:border-4 border-4 border-transparent hover:transition border-opacity-0 hover:border-opacity-100 hover:duration-700">
                  <div className="bg-purple-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl">
                    <IoAccessibilityOutline size="25px" color="purple" />
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