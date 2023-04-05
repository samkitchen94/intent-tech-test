import { TabItemProps } from "@components/TabGroup/TabGroup";
import Cash from "public/cash.svg";
import Financial from "public/financial.svg";
import Income from "public/income.svg";
import Payment from "public/payment.svg";


export const PERSONAL_FINANCE = "Personal Finance";
export const CAREERS = "Careers";
export const START_UPS = "Start-ups";
export const TRENDING = "Trending";


export const titles = [
  PERSONAL_FINANCE,
  CAREERS,
  START_UPS,
  TRENDING,
];

const personalFinance = [
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Cash,
    header: "Loan Payments",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
];

const careers = [
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Financial,
    header: "Financial Growth",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
];

const startUps = [
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Income,
    header: "Mortgages",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
];

const trending = [
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
  {
    icon: Payment,
    header: "Credit Cards",
    subheader: "Compare rates, crunch numbers and get expert guidance for life.",
  },
];

type TabInfo = {
  [key: string]: TabItemProps[]  
}

export const tabItems: TabInfo = {
  [PERSONAL_FINANCE]: personalFinance,
  [CAREERS]: careers,
  [START_UPS]: startUps,
  [TRENDING]: trending,
}