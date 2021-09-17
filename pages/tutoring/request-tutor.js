import { useState } from "react";
//components
import TutorRequestNav from "@/components/Navbars/TutorRequestNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSmall from "@/components/Footers/FooterSmall";

import AboutChildFirst from "@/components/Cards/AboutChildFirst";
import AboutChildLast from "@/components/Cards/AboutChildLast";
import ContactInfoFirst from "@/components/Cards/ContactInfoFirst";
import ContactInfoLast from "@/components/Cards/ContactInfoLast";
import LessonSchedule from "@/components/Cards/LessonSchedule";

export default function RequestTutor() {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "My First Step",
      isDone: true,
      component: AboutChildFirst,
    },
    {
      key: "secondStep",
      label: "My Second Step",
      isDone: false,
      component: AboutChildLast,
    },
    {
      key: "thirdStep",
      label: "My Third Step",
      isDone: false,
      component: ContactInfoFirst,
    },
    {
      key: "fourthStep",
      label: "My Fourth Step",
      isDone: false,
      component: ContactInfoLast,
    },
    {
      key: "finalStep",
      label: "My Final Step",
      isDone: false,
      component: LessonSchedule,
    },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {};

  const handleBack = () => {};

  return (
    <>
      <div>
        <TutorRequestNav />
        <div>
          <ToastContainer position="top-center" />
          <div className="px-4 md:px-10 mx-auto w-full content-wrap">
            <div className="pt-16 md:pt-24">
              <div className="md:p-5">
                <div className="md:p-4 py-4">
                  <div>{activeStep.component()}</div>

                  <div className="flex p-2 mt-4 w-11/12 mx-auto justify-between next-n-prev">
                    <button className="text-base focus:outline-none px-4 py-2 rounded font-medium cursor-pointer shadow border">
                      Back
                    </button>
                    <button className="text-white focus:outline-none px-4 py-2 rounded font-bold cursor-pointer bg-secondary border border-secondary">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <FooterSmall />
          </div>
        </div>
      </div>
    </>
  );
}
