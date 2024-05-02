
import { IoAccessibilityOutline } from "react-icons/io5";
interface ChildProps {
  chooseSubject: (subject: any) => void;
}
const Result: React.FC<ChildProps> = ({chooseSubject})=> {
  return (
    <div className="flex mt-20 justify-between ">
      {/* left container */}
      <div className="pr-14">
        <div className="mr-20">
          <p className="text-lg italic text-slate-400 font-sans mb-5">
            Question 6 of 10
          </p>
          <p className="dark:text-white text-slate-600 font-semibold text-4xl">
            Which of these color contrast ratios defines the minimum WACAG 2.1
            Level AA requirement for normal text?
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
            <li className="dark:text-white text-slate-600 bg-slate-100 dark:bg-slate-600 p-14 w-[36rem] h-[25rem] rounded-2xl space-y-10">
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
