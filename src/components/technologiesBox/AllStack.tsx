import type { ITechnologies } from "../../Types/TechnologiesType";
import SingleStackCard from "./SingleStackCard";

interface AllStackProps {
  technologies: ITechnologies[];
  handleAddToStack: (technology: ITechnologies) => void;
  addTech: ITechnologies[];
}

const AllStack = ({
  technologies,
  handleAddToStack,
  addTech,
}: AllStackProps) => {
  
  return (
    <div>
      {/* All Stack Card Section */}
      <div className="items-stretch grid grid-cols-3 gap-5 pt-5 pb-[80px]">
        {technologies.map(
          (technology: ITechnologies, ind: number) => {
            return (
              <SingleStackCard
                technology={technology}
                key={ind}
                handleAddToStack={handleAddToStack}
                addTech={addTech}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default AllStack;

