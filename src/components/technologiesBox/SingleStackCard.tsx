import React, { useState } from "react";
import type { ITechnologies } from "../../Types/TechnologiesType";

interface SingleStackCardProps {
  technology: ITechnologies;
}

const SingleStackCard = ({ technology }: SingleStackCardProps) => {

    const [isSelected, SetIsSelected] = useState(false)
    


  return (
    <div className="card border border-[#dbdbdb] shadow-sm mt-5">
      <div className="card-body ">
        <div className="flex justify-between">
          <img className="w-16 h-16" src={technology.icon} alt="React Icon" />
          <span className="btn py-[18px] px-[20px] badge badge-xs bg-[#E0F2FE] text-lg rounded-xl text-[#0EA5E9]">
            {technology.badge}
          </span>
        </div>

        <div>
          <h2 className="text-3xl font-bold pt-6">{technology.name}</h2>
          <div className="pt-4 text-[#64748B] text-[18px]">
            {technology.description}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <button className="btn border-none text-[#475569] text-[18px]">
            {technology.category}
          </button>
          <h2 className="text-[#475569] text-[18px]">{technology.level}</h2>
          <div className="flex justify-between items-center gap-2 color-[#FBBF24]">
            <div className="rating">
              <input className="mask mask-star bg-[#ffb700]" aria-label="1 star" />
            </div>
            <div className="text-[#475569] text-[18px] font-semibold">
              {technology.rating}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button 
          onClick = {() => SetIsSelected(true)}
          disabled={isSelected === true}
          className="btn btn-primary btn-block bg-[#0A0F1D] py-7 rounded-xl text-[17px]">
            {isSelected === true ? "Disabled" : "Add To Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleStackCard;
