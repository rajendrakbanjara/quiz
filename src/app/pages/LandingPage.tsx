import { MdOutlineLightMode } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { GoMoon } from "react-icons/go";
import { useState, useEffect } from "react";
import Subjects from "./Subjects";
import Question from "./Question";
import Result from "./Result";

const LandingPage = () => {


  var chooseSubject = (subject: any) => setSelectedSubject(subject);

  // theme change
  const [theme, setTheme] = useState("light");
  const [btnColor, setBtnColor] = useState("darkBlue");

  const [selectedSubject, setSelectedSubject] = useState(0);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setBtnColor(btnColor == "darkBlue" ? "white" : "darkBlue");
  };
  return (
    <div className="flex justify-center h-screen pt-11 dark:bg-slate-700">
      <div className="dark:bg-slate-700 w-[80%] mt-10">
        {/* mode changing section */}
        <div className="">
          <div className="flex float-end space-x-3 items-center">
            <MdOutlineLightMode color={btnColor} size="30px" />
            <RxSwitch color={btnColor} size="40px" onClick={handleSwitch} />
            <GoMoon color={btnColor} size="30px" />
          </div>
        </div>

        {/* If subject is not selected */}
        {selectedSubject == 0 && <Subjects chooseSubject={chooseSubject}/>}

        {/* If subject is selected */}
        {(selectedSubject > 0 && selectedSubject < 5) && <Question subject={selectedSubject} chooseSubject={chooseSubject}/>}
        
        {selectedSubject == -1 && <Result chooseSubject={chooseSubject}/>}
        
      </div>
    </div>
  );
};

export default LandingPage;
