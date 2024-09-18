"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useDialog from "@/hooks/useDialog";
import {
  Step1Data,
  Step2Data,
  Step3Data,
  Step4Data,
  Step5Data,
} from "@/@types/register";
import Button from "@/components/Button";
import VisitStep1 from "../RegisterVisit/Step1";
import VisitStep2 from "../RegisterVisit/Step2";
import VisitStep3 from "../RegisterVisit/Step3";
import VisitStep4 from "../RegisterVisit/Step4";
import VisitStep5 from "../RegisterVisit/Step5";
import RegisterProgress from "../RegisterProgress";
import styles from "./index.module.scss";

const RegisterFormStep: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const { alert } = useDialog();

  // Step 1
  const [step1Data, setStep1Data] = useState<Step1Data>({
    platform: null,
    type: null,
    category: null,
    serviceProvided: "",
  });

  // Step 2
  const [step2Data, setStep2Data] = useState<Step2Data>({
    businessName: "",
    imageUrl: null,
    postalCode: "",
    address: "",
    addressDetail: "",
    contactNumber: "",
  });

  // Step 3
  const [step3Data, setStep3Data] = useState<Step3Data>({
    availableDays: [],
    experienceStartTime: "",
    experienceEndTime: "",
  });

  // Step 4
  const [step4Data, setStep4Data] = useState<Step4Data>({
    requirement: "",
    keywords: ["", "", ""],
  });

  // Step 5
  const [step5Data, setStep5Data] = useState<Step5Data>({
    capacity: 0,
    pointPayment: true,
    personPoint: 0,
    totalPoint: 0,
  });

  const steps = [
    {
      component: <VisitStep1 stepData={step1Data} setStepData={setStep1Data} />,
      label: "플랫폼 유형 제공 서비스",
      validate: () => {
        return (
          step1Data.platform &&
          step1Data.type &&
          step1Data.category &&
          step1Data.serviceProvided.trim() !== ""
        );
      },
    },
    {
      component: <VisitStep2 stepData={step2Data} setStepData={setStep2Data} />,
      label: "사업주 정보",
      validate: () => {
        return (
          step2Data.businessName.trim() !== "" &&
          step2Data.imageUrl !== null &&
          step2Data.postalCode.trim() !== "" &&
          step2Data.address.trim() !== "" &&
          step2Data.contactNumber.trim() !== ""
        );
      },
    },
    {
      component: <VisitStep3 stepData={step3Data} setStepData={setStep3Data} />,
      label: "체험 정보",
      validate: () => {
        return (
          step3Data.availableDays.length > 0 &&
          step3Data.experienceStartTime.trim() !== "" &&
          step3Data.experienceEndTime.trim() !== ""
        );
      },
    },
    {
      component: <VisitStep4 stepData={step4Data} setStepData={setStep4Data} />,
      label: "미션",
      validate: () => {
        return (
          step4Data.requirement.trim() !== "" &&
          step4Data.keywords.some((keyword) => keyword.trim() !== "")
        );
      },
    },
    {
      component: <VisitStep5 stepData={step5Data} setStepData={setStep5Data} />,
      label: "모집 인원 지급 포인트",
      validate: () => {
        return (
          step5Data.capacity > 0 &&
          (!step5Data.pointPayment ||
            (step5Data.personPoint > 0 && step5Data.totalPoint > 0))
        );
      },
    },
  ];

  const nextStep = () => {
    const isValid = steps[currentStep - 1].validate();
    if (!isValid) {
      alert("모든 항목을 입력해 주세요");
      return;
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePageBackClick = () => {
    router.back();
  };

  const handleFormSubmit = async () => {
    const isValid = steps[currentStep - 1].validate();
    if (!isValid) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    const formData = new FormData();

    // Step 1 to Step 5 data (JSON으로 변환해서 넣기)
    const jsonData = {
      businessName: step2Data.businessName,
      contactNumber: step2Data.contactNumber,
      address: step2Data.address,
      postalCode: step2Data.postalCode,
      addressDetail: step2Data.addressDetail,
      serviceProvided: step1Data.serviceProvided,
      platform: step1Data.platform,
      type: step1Data.type,
      category: step1Data.category,
      availableDays: step3Data.availableDays,
      experienceStartTime: step3Data.experienceStartTime,
      experienceEndTime: step3Data.experienceEndTime,
      requirement: step4Data.requirement,
      keywords: step4Data.keywords,
      capacity: step5Data.capacity,
      pointPayment: step5Data.pointPayment,
      personPoint: step5Data.personPoint,
      totalPoint: step5Data.totalPoint,
    };

    // JSON 데이터를 문자열로 변환하여 FormData에 추가
    formData.append("data", JSON.stringify(jsonData));

    // Step2의 imageUrl (파일만 FormData에 별도로 추가)
    if (step2Data.imageUrl instanceof File) {
      formData.append("imageUrl", step2Data.imageUrl); // 파일만 FormData에 append
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/campaigns`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      alert("등록 완료되었습니다.");
    } catch (error) {
      console.error("등록 중 오류 발생:", error);
      alert("등록에 실패했습니다.");
      console.log("전송된 jsonData:", JSON.stringify(jsonData, null, 2));
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <RegisterProgress
          currentStep={currentStep}
          stepList={steps.map((step) => step.label)}
        />

        <div className="step-content">{steps[currentStep - 1].component}</div>

        <div className={styles["button-container"]}>
          <Button
            type="button"
            color="outline--gray"
            size="medium"
            onClick={handlePageBackClick}
          >
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
              <Button type="button" size="medium" onClick={handleFormSubmit}>
                등록하기
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterFormStep;
