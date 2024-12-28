'use client'
import Image from "next/image";
import Input from "./Input";
import { useState } from "react";
export default function Home() {
  const [MedicationName, SetMedicationName] = useState("")
  const [MorningPillAmount, SetMorningPillAmount] = useState(0)
  const [NightPillAmount, SetNightPillAmount] = useState(0)
  const [TotalPillAmount, SetTotalPillAmount] = useState(0)
  function StoreMedicationName (e) {
    SetMedicationName(e.target.value)
  }
  function StoreMorningPillAmount (e) {
    SetMorningPillAmount(e.target.value)
  }
  function StoreNightPillAmount (e) {
    SetNightPillAmount(e.target.value)
  }
  function StoreTotalPillAmount (e) {
    SetTotalPillAmount(e.target.value)
  }
  function CalculatePills() {
    /*
    say we have 1 in the morning 4 at night\
    40 in total pills.
    totalPills
    morningTaken
    nightTaken
    while(totalPills > 0)
    {
      totalPills -= morning dosage
      morningTaken += morning dosage
      if(on this iteration, totalPills is still > 0)
      {
        totalPills -= night dosage
        nightTaken += night dosage
      }
    }
     */
    let totalPills = TotalPillAmount;
    let morningTaken = 0;
    let nightTaken = 0;
    console.log("TotalPills: " + totalPills);
    console.log("MorningTaken: " + morningTaken);
    console.log("NightTaken: " + nightTaken);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Name of medication: 
            <Input
            InputType="text"
            changeParentState={StoreMedicationName}></Input>
          </li>
          <li className="mb-2">
            How much do you take in the morning?
            <Input
            InputType="number"
            changeParentState={StoreMorningPillAmount}></Input>
          </li>
          <li>
            How much do you take at night?
            <Input
            InputType="number"
            changeParentState={StoreNightPillAmount}></Input>
          </li>
          <li>
            How many pills do you have left?
            <Input
            InputType="number"
            changeParentState={StoreTotalPillAmount}></Input>
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={CalculatePills}
          >
            Calculate Medication
          </a>
        </div>
      </main>
    </div>
  );
}
