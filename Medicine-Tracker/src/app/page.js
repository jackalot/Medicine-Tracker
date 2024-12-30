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
  const [NewValues, setNewValues] = useState({});
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
  function UpdateInitialValuesOBJ() {
    setInitialValues({
      medName: MedicationName,
      morningAmount: MorningPillAmount,
      nightAmount: NightPillAmount,
      Total: TotalPillAmount,
    });
  }

  function UpdateNewValuesObj(totalPills, morningTaken, dayAmount, nightTaken) {
    setNewValues({
      totalPills: totalPills,
      morningTaken: morningTaken,
      dayAmount: dayAmount,
      nightTaken: nightTaken,
    });
  }
  function CalculatePillsMorningsFirst() {
    let totalPills = TotalPillAmount;
    let morningTaken = 0;
    let nightTaken = 0;
    // Sort through all pills
    let keepGoing = true;
    while (totalPills > 0 && keepGoing === true) {
      if (totalPills >= MorningPillAmount) {
        totalPills -= MorningPillAmount;
        if (MorningPillAmount > 0) {
          morningTaken += 1;
        }
      }
      if (totalPills >= NightPillAmount) {
        totalPills -= NightPillAmount;
        if (NightPillAmount > 0) {
          nightTaken += 1;
        }
      }
      if (totalPills <= MorningPillAmount && totalPills <= NightPillAmount) {
        keepGoing = false;
      }
    }
    let days = 0;
    if (morningTaken > nightTaken) {
      days = morningTaken - nightTaken;
    }
    SetShowPopup(true);
    UpdateInitialValuesOBJ();
    UpdateNewValuesObj(totalPills, morningTaken, days, nightTaken);
  }
  function CalculatePillsNightsFirst() {
    let totalPills = TotalPillAmount;
    let morningTaken = 0;
    let nightTaken = 0;
    // Sort through all pills
    let keepGoing = true;
    while (totalPills > 0 && keepGoing === true) {
      if (totalPills >= NightPillAmount) {
        totalPills -= NightPillAmount;
        if (NightPillAmount > 0) {
          nightTaken += 1;
        }
      }
      if (totalPills >= MorningPillAmount) {
        totalPills -= MorningPillAmount;
        if (MorningPillAmount > 0) {
          morningTaken += 1;
        }
      }
      if (totalPills <= MorningPillAmount && totalPills <= NightPillAmount) {
        keepGoing = false;
      }
    }
    let days = 0;
    if (nightTaken > morningTaken) {
      days = nightTaken - morningTaken;
    }
    SetShowPopup(true);
    UpdateNewValuesObj(totalPills, morningTaken, days, nightTaken);
    UpdateInitialValuesOBJ();
  }
  //reveals the popup
  function GetPopupStatus() {
    return ShowPopup;
  }
  function GetInitialValues() {
    return InitialValues;
  }
  function GetNewValues() {
    return NewValues;
  }
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
          GetInitialValues={GetInitialValues}
          GetNewValues={GetNewValues}
        ></Popup>
        <p>What dosage will you have first, morning, or night?</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={CalculatePillsMorningsFirst}
          >
            Calculate Medication (Mornings First)
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={CalculatePillsNightsFirst}
          >
            Calculate Medication (Nights First)
          </a>
        </div>
      </main>
    </div>
  );
}
