import { MdOutlineLightMode } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { GoMoon } from "react-icons/go";
import { LuPaintbrush2 } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { IoAccessibilityOutline } from "react-icons/io5";
const LandingPage = () => {
  return (
    <div className="flex justify-center h-screen pt-11 bg-slate-700">
      <div className="bg-slate-700 w-[80%] mt-10">
        {/* mode changing section */}
        <div className="">
          <div className="flex float-end space-x-3 items-center">
            <MdOutlineLightMode color="white" size="30px" />
            <RxSwitch color="white" size="40px" />
            <GoMoon color="white" size="30px" />
          </div>
        </div>

        {/*Bottom container */}
        <div className="flex mt-28 justify-between">
          {/* left container */}
          <div className="">
            <div className="">
              <p className="text-6xl text-white font-light font-sans">Welcome to the</p>
              <p className="text-7xl text-white font-semibold font-sans">Frontend Quiz!</p>
              <p className="text-lg italic text-slate-400 font-sans mt-10">Pick a subject to get started.</p>
            </div>
          </div>
          {/* Right container */}
          <div>
            <div>
                <ul className="space-y-4">
                    <li className="flex items-center font-bold text-white bg-slate-600 p-2 w-[36rem] rounded-2xl text-2xl"><div className="bg-orange-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl"><FaCode color="orange" size="25px"/></div> HTML</li>
                    <li className="flex items-center font-bold text-white bg-slate-600 p-2 w-[36rem] rounded-2xl text-2xl"><div className="bg-green-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl"><LuPaintbrush2 color="Green" size="25px"/></div> CSS</li>
                    <li className="flex items-center font-bold text-white bg-slate-600 p-2 w-[36rem] rounded-2xl text-2xl"><div className="bg-blue-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl"><RiJavascriptLine color="Blue" size="25px"/></div>JavaScritp</li>
                    <li className="flex items-center font-bold text-white bg-slate-600 p-2 w-[36rem] rounded-2xl text-2xl"><div className="bg-purple-100 p-4 ml-2 my-2 rounded-md  mr-7 text-2xl"><IoAccessibilityOutline size="25px" color="purple"/></div>Accessibility</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
