"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import VisitStep1 from "../Visit/Step1";
import VisitStep2 from "../Visit/Step2";
import VisitStep3 from "../Visit/Step3";
import VisitStep4 from "../Visit/Step4";
import VisitStep5 from "../Visit/Step5";
import RegisterProgressBar from "../ProgressBar";
import styles from "./index.module.scss";

const FormStep: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { component: <VisitStep1 />, label: "플랫폼 유형 제공 서비스" },
    { component: <VisitStep2 />, label: "사업주 정보" },
    { component: <VisitStep3 />, label: "체험 정보" },
    { component: <VisitStep4 />, label: "미션" },
    { component: <VisitStep5 />, label: "모집 인원 지급 포인트" },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <RegisterProgressBar
          currentStep={currentStep}
          stepList={steps.map((step) => step.label)}
        />

        <div className="step-content">{steps[currentStep - 1].component}</div>

        <div className={styles["button-container"]}>
          <Button type="button" color="outline--gray" size="medium">
            닫기
          </Button>
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                color="outline"
                size="medium"
              >
                이전단계
              </Button>
            )}
            {currentStep < 5 ? (
              <Button type="button" onClick={nextStep} size="medium">
                다음단계
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => alert("제출 완료")}
                size="medium"
              >
                등록하기
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormStep;
