"use client";

import { Card } from "@/components/ui/card";
import visaLogo from "./visa-logo-white.svg";
import ccChip from "./cc-chip.svg";

import localFont from "next/font/local";
import "./CreditCard.css";
import Image from "next/image";
import { Nfc } from "lucide-react";
import { useState } from "react";

const ccFont = localFont({
  src: "./cc-font/subset-CreditCard.woff2",
  variable: "--font-cc",
});

const CreditCard = () => {
  const [ccNumber, setCcNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");

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
        <input
          type="text"
          className="font-cc cc-text text-3xl leading-loose placeholder-transparent"
          placeholder="0000 0000 0000 0000"
          value={ccNumber}
          onChange={(e) => setCcNumber(e.target.value)}
        />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-end w-1/2">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex flex-col items-end text-white text-[0.6rem] font-sans tracking-tight font-semibold">
                <span>GOOD</span>
                <span>THRU</span>
              </div>
              <div className="flex items-center">
                <input
                  className="font-cc cc-text leading-6 w-8 placeholder-transparent"
                  type="text"
                  placeholder="00"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <span className="font-cc cc-text text-2xl leading-6 w-4">
                  /
                </span>
                <input
                  className="font-cc cc-text leading-6 w-8 placeholder-transparent"
                  type="text"
                  placeholder="00"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <input
              type="text"
              className="font-cc cc-text text-2xl leading-6 placeholder-transparent text-right w-full"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
              placeholder="CARDHOLDER NAME"
            />
          </div>
          <div className="w-1/2 flex justify-end items-end pt-8">
            <Image src={visaLogo} alt="VISA" width={150} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CreditCard;
