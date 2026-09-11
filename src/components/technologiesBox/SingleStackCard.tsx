import React, { useState } from "react";
import type { ITechnologies } from "../../Types/TechnologiesType";
import { toast } from "react-toastify";

interface SingleStackCardProps {
  technology: ITechnologies;
}

const SingleStackCard = ({ technology }: SingleStackCardProps) => {
  const [isSelected, SetIsSelected] = useState(false);


  return (
    <div>
      <div
        className={` ${isSelected === true ? "border-2 -translate-y-2 shadow-xl" : ""}  border-[#D91B7E] rounded-xl  shadow-sm mt-5`}
      >
        <div className="card-body ">
          <div className="flex justify-between">
            <img className="w-14 h-14" src={technology.icon} alt="React Icon" />
            <span
              className={`btn py-[18px] px-[20px] badge badge-xs bg-[#E0F2FE] text-[16px] rounded-xl ${isSelected === true ? "text-[#D91B7E]" : ""} `}
            >
              {technology.badge}
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-bold pt-6">{technology.name}</h2>
            <div className="pt-4 text-[#64748B] text-[16px]">
              {technology.description}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <button className="btn border-none text-[#475569] text-[16px]">
              {technology.category}
            </button>
            <h2 className="text-[#475569] text-[16px]">{technology.level}</h2>
            <div className="flex justify-between items-center gap-2 color-[#FBBF24]">
              <div className="rating">
                <input
                  className="mask mask-star bg-[#ffb700]"
                  aria-label="1 star"
                />
              </div>
              <div className="text-[#475569] text-[18px] font-semibold">
                {technology.rating}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
              SetIsSelected(true);
              toast.success("Add To Stack");
              }}
              disabled={isSelected === true}
              className={`btn btn-primary btn-block ${isSelected === true ? "bg-[#efcfe2] text-[#D91B7E] font-semibold" : "bg-[#0A0F1D]"}  py-6 rounded-xl text-[16px]`}
            >
              {isSelected === true ? "Added to Stack" : "Add To Stack"}
            </button>
          </div>
        </div>
    </div>

    </div>
  );


};

export default SingleStackCard;
