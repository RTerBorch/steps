import React, { useState } from "react";
import { StepMessage } from "./components/StepMessage";
import { Button } from "./components/Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        Toggle steps on/off
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>{"👈"}</span>
              {"Previous"}
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              {"Previous"}
              <span>{"👈"}</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
