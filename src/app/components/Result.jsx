import { MdOutlineLightMode } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { GoMoon } from "react-icons/go";
import { LuPaintbrush2 } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { IoAccessibilityOutline } from "react-icons/io5";
const Result = () => {
  return (
    <div className="flex justify-center h-screen pt-11 bg-slate-700">
      <div className="bg-slate-700 w-[80%] mt-10">
        {/* mode changing section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-md inline-block">
              <IoAccessibilityOutline size="40px" color="purple" />
            </div>
            <div className="inline-block text-white font-semibold text-2xl">
              Accessibility
            </div>
          </div>
          <div className="flex  space-x-4 items-center">
            <MdOutlineLightMode color="white" size="30px" />
            <RxSwitch color="white" size="40" />
            <GoMoon color="white" size="30" />
          </div>
        </div>

        {/*Bottom container */}
        <div className="flex mt-20 justify-between ">
          {/* left container */}
          <div className="pr-14">
            <div className="mr-20">
              <p className="text-lg italic text-slate-400 font-sans mb-5">
                Question 6 of 10
              </p>
              <p className="text-white font-semibold text-4xl">
                Which of these color contrast ratios defines the minimum WACAG
                2.1 Level AA requirement for normal text?
              </p>
            </div>
            <div>
              <input type="range" />
            </div>
          </div>
          {/* Right container */}
          <div>
            <div className="space-y-6">
              <ul className="space-y-4">
                <li className="text-white bg-slate-600 p-14 w-[36rem] h-[25rem] rounded-2xl space-y-10">
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-5">
                      <div className="bg-purple-100 p-2 rounded-md inline-block">
                        <IoAccessibilityOutline size="40px" color="purple" />
                      </div>
                      <div className="inline-block text-white font-semibold text-3xl">
                        Accessibility
                      </div>
                    </div>
                  </div>
                  <div className="text-9xl font-bold font-sans flex justify-center">
                    <span>6</span>
                  </div>
                  <div className="flex justify-center">
                    <span>out of 10</span>
                  </div>
                </li>
              </ul>
              <div>
                <button
                  type="submit"
                  className="flex items-center font-bold text-white p-2 w-[36rem] rounded-2xl text-2xl justify-center py-7 bg-purple-600"
                >
                  Play again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
