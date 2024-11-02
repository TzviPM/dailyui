import { Card } from "@/components/ui/card";
import visaLogo from "./visa-logo-white.svg";
import ccChip from "./cc-chip.svg";

import localFont from "next/font/local";
import "./CreditCard.css";
import Image from "next/image";
import { Nfc } from "lucide-react";

const ccFont = localFont({
  src: "./cc-font/subset-CreditCard.woff2",
  variable: "--font-cc",
});

export const CreditCard = () => {
  return (
    <div className={ccFont.variable}>
      <Card className="w-[33.70rem] h-[21.25rem] bg-gradient-to-tr from-blue-900 to-blue-700 flex flex-col justify-between items-left pb-4 pr-4 pt-8 pl-12">
        <span className="font-sans text-4xl text-white font-light tracking-wider mb-8 -ml-6">
          Visa Classic
        </span>
        <div className="flex gap-2">
          <div className="chip-box">
            <Image src={ccChip} alt="" className="text-slate-400" />
          </div>
          <Nfc size="3.5rem" color="white" />
        </div>
        <span className="font-cc cc-text text-3xl leading-loose">
          4000 1234 5678 9010
        </span>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-end w-1/2">
            <div className="flex flex-row gap-1 items-center">
              <div className="flex flex-col items-end text-white text-[0.5rem]">
                <span>GOOD</span>
                <span>THRU</span>
              </div>
              <div className="font-cc cc-text leading-6">
                00<span className="text-2xl leading-6">/</span>00
              </div>
            </div>
            <div className="font-cc cc-text text-2xl leading-6">
              CARDHOLDER NAME
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-end pt-8">
            <Image src={visaLogo} alt="VISA" width={150} />
          </div>
        </div>
      </Card>
    </div>
  );
};
