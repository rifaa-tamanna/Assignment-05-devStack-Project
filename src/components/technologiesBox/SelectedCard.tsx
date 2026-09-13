import React, { type Dispatch, type SetStateAction } from "react";
import type { ITechnologies } from "../../Types/TechnologiesType";

interface SelectedCardProps {
  selectedStack: ITechnologies;
  setselectedStack: Dispatch<SetStateAction<ITechnologies[]>>;
}

const SelectedCard = ({
  selectedStack,
  setselectedStack,
}: SelectedCardProps) => {
  return (
    <div className="w-1/4">
      <div className="card card-lg shadow-sm">
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl text-[#0F172A]">
            Your Stack
          </h2>

          <p className="text-[#94A3B8] text-[16px]">
            No technologies selected yet
          </p>

          <div className="border border-dashed border-base-300 rounded-2xl h-24 flex items-center justify-center mt-2">
            <p className="font-semibold text-base-content/40 text-center">
              Your Stack is empty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
