import type { ITechnologies } from "../../Types/TechnologiesType";
import SingleStackCard from "./SingleStackCard";

interface AllStackProps {
  technologies: ITechnologies[];
}

const AllStack = ({ technologies }: AllStackProps) => {
  return (
    <div className="flex justify-between gap-6">
      
      {/* All Stack Card Section */}
      <div className="w-3/4 grid grid-cols-3 gap-5 pt-6 pb-[80px]">
        {technologies.map((technology: ITechnologies, ind: number) => {
          return <SingleStackCard technology={technology} key={ind} />;
        })}
      </div>

      {/* Your Stack Card Section */}
      <div className="w-1/4 mt-[35px]">
        <div className="card card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl text-[#0F172A]">Your Stack</h2>
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
      
    </div>
  );
};

export default AllStack;
