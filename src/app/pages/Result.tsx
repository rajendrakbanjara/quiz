
import { IoAccessibilityOutline } from "react-icons/io5";
interface ChildProps {
  chooseSubject: (subject: any) => void;
  marks: number;
}
const Result: React.FC<ChildProps> = ({chooseSubject, marks})=> {
  return (
    <div className="lg:flex lg:mt-20 mt-12 lg:justify-between ">
      {/* left container */}
      <div className="lg:pr-14">
        <div className="lg:mr-20">
          {/* <p className="text-lg italic text-slate-400 font-sans mb-5">
           
          </p> */}
          <p className="dark:text-white text-slate-600 font-sans font-thin lg:text-7xl text-4xl">
            Quiz Completed
          </p>
          <p className="dark:text-white text-slate-600 font-sans font-semibold lg:text-6xl text-3xl">
            You Scored...
          </p>
        </div>
      </div>
      {/* Right container */}
      <div>
        <div className="lg:space-y-6 space-y-4 lg:mt-0 mt-3">
          <ul className="space-y-4">
            <li className="dark:text-white text-slate-600 bg-slate-100 dark:bg-slate-600 p-14 lg:w-[36rem] lg:h-[25rem] rounded-2xl lg:space-y-10">
              <div className="flex justify-center">
                <div className="flex items-center space-x-5">
                  <div className="bg-purple-100 p-2 rounded-md inline-block">
                    <IoAccessibilityOutline size="40px" color="purple" />
                  </div>
                  <div className="inline-block dark:text-white font-semibold text-3xl">
                    Accessibility
                  </div>
                </div>
              </div>
              <div className="text-9xl font-bold font-sans flex justify-center">
                <span>{marks}</span>
              </div>
              <div className="flex justify-center">
                <span>out of 10</span>
              </div>
            </li>
          </ul>
          <div>
            <button
              type="submit"
              className="flex items-center font-bold text-white p-4 lg:w-[36rem] w-full rounded-2xl text-2xl justify-center py-7 bg-purple-600"
              onClick={()=>chooseSubject(0)}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
