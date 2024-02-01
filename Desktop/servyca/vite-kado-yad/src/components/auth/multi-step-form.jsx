import React, { useState } from "react";
import { steps } from "../../@core/data/welcome-page";
import { Link } from "react-router-dom";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="flex bg-[white] max-w-[400px] items-center mx-auto flex-col lgjustify-center justify-between relative overflow-hidden  !h-screen">
      <div className="flex justify-between w-full items-center p-5 pb-0">
        <Link
          to="/auth"
          className="cursor-pointer font-bold"
          onClick={handleNext}
        >
          رد شدن
        </Link>
        <div className="top-0 right-4 ">
          {currentStep}
          <span className="text-[#A0A0A1]">/{steps.length}</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col justify-between h-full ">
        <div className="relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`borde ${
                currentStep === step.id ? "block" : "hidden"
              } ${
                currentStep === steps.length ? "rounded-10" : "rounded-full"
              } p-4`}
            >
              <img
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-[375px] mx-auto"
                width={100}
                height={100}
              />
              <h2 className="text-center text-[28px] w-[95%] mt-3 mb-3 font-extrabold text-lg">
                {step.title}
              </h2>
              <p className="text-fundation text-center text-[17px]">
                {step.content}
              </p>
            </div>
          ))}
        </div>
        <div className="flex p-4 font-bold justify-between items-center">
          {currentStep !== 1 && (
            <div
              className="bottom-4 right-4 cursor-pointer"
              onClick={handlePrev}
            >
              قبلی
            </div>
          )}
          {currentStep == 1 && (
            <div className="bottom-4 left-4 cursor-pointer min-w-[25px]"></div>
          )}
          <div className="flex items-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentStep === step.id
                    ? "bg-primary !w-[35px]"
                    : "bg-mutedText"
                }`}
              />
            ))}
          </div>
          {currentStep !== 3 && (
            <button onClick={handleNext} className="text-primary ">
              بعدی
            </button>
          )}
          {currentStep == 3 && (
            <Link to="/auth" className="text-primary cursor-pointer">
              ورود
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
