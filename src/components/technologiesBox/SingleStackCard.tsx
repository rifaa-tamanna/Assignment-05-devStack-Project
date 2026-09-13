import { FaCheck } from "react-icons/fa";
import type { ITechnologies } from "../../Types/TechnologiesType";

interface SingleStackCardProps {
  technology: ITechnologies;
  handleAddToStack: (technology: ITechnologies) => void;
  addTech: ITechnologies[];
}

const SingleStackCard = ({
  technology,
  handleAddToStack,
  addTech,
}: SingleStackCardProps) => {
  const isSelected = addTech.some((tech) => tech.name === technology.name);

  const handleSelectTech = () => {
    handleAddToStack(technology);
  };

  return (
    <div>
      <div
        className={`${
          isSelected === true ? "border-2 -translate-y-2 shadow-xl" : ""
        } border-[#D91B7E] rounded-xl shadow-sm mt-5`}
      >
        <div className="card-body p-4 md:p-5">
          <div className="flex justify-between">
            <img className="w-12 h-12" src={technology.icon} alt="React Icon" />

            <span
              className={`btn py-[16px] px-[20px] badge badge-xs bg-[#E0F2FE] text-[14px] rounded-xl ${
                isSelected === true ? "text-[#D91B7E]" : ""
              }`}
            >
              {technology.badge}
            </span>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold pt-4">
              {technology.name}
            </h2>

            <div className="pt-4 text-[#64748B] text-[15px]">
              {technology.description}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 gap-2">
            <button className="border-none text-[#475569] text-[15px]">
              {technology.category}
            </button>

            <h2 className="text-[#475569] text-[15px]">{technology.level}</h2>

            <div className="flex justify-between items-center gap-2 color-[#FBBF24]">
              <div className="rating">
                <input
                  className="mask mask-star bg-[#7a5904]"
                  aria-label="1 star"
                />
              </div>

              <div className="text-[#475569] text-[16px] font-semibold">
                {technology.rating}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleSelectTech}
              disabled={isSelected}
              className={`btn btn-primary btn-block ${
                isSelected
                  ? "bg-[#efcfe2] text-[#D91B7E] font-semibold"
                  : "bg-[#0A0F1D]"
              } py-5 rounded-xl text-[15px]`}
            >
              {isSelected === true ? (
                <>
                  <FaCheck /> Added to Stack
                </>
              ) : (
                "Add to Stack"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStackCard;
