"use client";
import Image from "next/image";
import Input from "./Input";
import { useState } from "react";
import Popup from "./popup";
export default function Home() {
  const [MedicationName, SetMedicationName] = useState("");
  const [MorningPillAmount, SetMorningPillAmount] = useState(0);
  const [NightPillAmount, SetNightPillAmount] = useState(0);
  const [TotalPillAmount, SetTotalPillAmount] = useState(0);
  const [InitialValues, setInitialValues] = useState({});
  const [ShowPopup, SetShowPopup] = useState(false);
  function StoreMedicationName(e) {
    SetMedicationName(e.target.value);
  }
  function StoreMorningPillAmount(e) {
    SetMorningPillAmount(parseInt(e.target.value));
  }
  function StoreNightPillAmount(e) {
    SetNightPillAmount(parseInt(e.target.value));
  }
  function StoreTotalPillAmount(e) {
    SetTotalPillAmount(parseInt(e.target.value));
  }
  function CalculatePillsMorningsFirst() {
    let totalPills = TotalPillAmount;
    let morningTaken = 0;
    let nightTaken = 0;
    // Sort through all pills
    while (totalPills > 0) {
      totalPills -= MorningPillAmount;
      if (MorningPillAmount > 0) {
        morningTaken += 1;
      }
      if (totalPills > 0) {
        totalPills -= NightPillAmount;
        if (NightPillAmount > 0) {
          nightTaken += 1;
        }
      }
    }
    console.log("TotalPills: " + totalPills);
    console.log("MorningTaken: " + morningTaken);
    console.log("NightTaken: " + nightTaken);
    SetShowPopup(true);
    setInitialValues({
      medName: MedicationName,
      morningAmount: MorningPillAmount,
      nightAmount: NightPillAmount,
      Total: TotalPillAmount,
    });
  }
  //reveals the popup
  function GetPopupStatus() {
    return ShowPopup;
  }
  //hides popup
  function HidePopup() {
    SetShowPopup(false);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Name of medication:
            <Input
              InputType="text"
              changeParentState={StoreMedicationName}
            ></Input>
          </li>
          <li className="mb-2">
            How much do you take in the morning?
            <Input
              InputType="number"
              changeParentState={StoreMorningPillAmount}
            ></Input>
          </li>
          <li>
            How much do you take at night?
            <Input
              InputType="number"
              changeParentState={StoreNightPillAmount}
            ></Input>
          </li>
          <li>
            How many pills do you have left?
            <Input
              InputType="number"
              changeParentState={StoreTotalPillAmount}
            ></Input>
          </li>
        </ul>
        <Popup
          HidePopup={HidePopup}
          canShowMethod={GetPopupStatus}
          InitialValues={InitialValues}
        ></Popup>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={CalculatePillsMorningsFirst}
          >
            Calculate Medication (Mornings First)
          </a>
        </div>
      </main>
    </div>
  );
}
