import { Option } from "@/components/Selectbox";

export interface Step1Data {
  platform: Option | null;
  type: Option | null;
  category: Option | null;
  serviceProvided: string;
}

export interface Step2Data {
  businessName: string;
  imageUrl: File | null;
  address: string;
  postalCode: string;
  addressDetail: string;
  contactNumber: string;
}

export interface Step3Data {
  availableDays: string[];
  experienceStartTime: string;
  experienceEndTime: string;
}

export interface Step4Data {
  requirement: string;
  keywords: string[];
}

export interface Step5Data {
  capacity: number;
  pointPayment: boolean;
  personPoint: number;
  totalPoint: number;
}
