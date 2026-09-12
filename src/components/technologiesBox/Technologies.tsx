import React, { use, useState } from "react";
import type { ITechnologies } from "../../Types/TechnologiesType";
import AllStack from "./AllStack";

import { toast } from "react-toastify";

import { IoCloseSharp } from "react-icons/io5";

interface TechnologiesProps {
  technologiesPromises: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromises }: TechnologiesProps) => {
  const technologies = use(technologiesPromises);

const [addTech, setAddTech] = useState<ITechnologies[]>([]);


// Add to Stack
const handleAddToStack = (techno: ITechnologies) => {
  setAddTech([...addTech, techno]);

  toast.success(`${techno.name} added to your stack!`);
};


// Remove Single Stack
const handleRemoveStack = (stack: ITechnologies) => {
  const restStacks = addTech.filter(
    (oneStackGet) => oneStackGet.name !== stack.name
  );

  setAddTech(restStacks);

  toast.warning(`${stack.name} removed from stack!`);
};


// Remove All Stack 
const handleRemoveAll = () => { 
  setAddTech([]); toast.error("All technologies removed from your stack!"); };

  return (
    <section>

      {/* Heading title */}
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-4xl">
          Explore
          <span className="bg-gradient-to-r from-[#DB4BA9] to-[#CA4FB9] bg-clip-text text-transparent">
            Technologies
          </span>
        </div>

        <div className="text-[64748B] text-4 pt-3">
          Pick one technology per category to build your ideal stack.
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto min-h-fit gap-8">
        {/* All Technology Cards */}
        <div className="w-3/4">
          <AllStack
            technologies={technologies}
            handleAddToStack={handleAddToStack}
            addTech={addTech}
          />
        </div>

        {/* Your Stack */}
        <div className="w-1/4 grid grid-cols-1 py-10">
          <div className="h-full mt-auto">
            {addTech.length === 0 ? (
              <div className="card card-lg shadow-sm">
                <div className="card-body">
                  <h2 className="card-title font-bold text-2xl text-[#0F172A]">
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
            ) : (
              <div className="card bg-base-100 shadow-sm rounded-1xl">
                <div className="card-body">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="font-bold text-2xl">Your Stack</h1>

                      <p className="text-[#94A3B8] text-[16px] pt-[4px] pb-[10px]">
                        {addTech.length}
                        {addTech.length === 1
                          ? "Technology Selected"
                          : "Technologies Selected"}
                      </p>
                    </div>
                  </div>

                  {/* Selected Technologies */}
                  <div className="card-actions border-gray-100 rounded-2xl justify-end grid grid-cols-1">
                    {addTech.map((technology: ITechnologies, index: number) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between border-2 border-gray-400 p-5"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={technology.icon}
                              alt=""
                              className="h-10 w-10"
                            />

                            <div>
                              <h2 className="font-bold text-35px">
                                {technology.name}
                              </h2>

                              <p className="text-[#A5B1C3] text-xm">
                                {technology.category}
                              </p>
                            </div>
                          </div>

                          {/* Remove Single Technology */}
                          <span
                            className="text-[#94A3B8] font-bold flex items-center text-[35px]"
                            onClick={() => handleRemoveStack(technology)}
                          >
                            <IoCloseSharp />
                          </span>
                        </div>
                      );
                    })}

                      {/* Remove All Button */}
                    <button
                      onClick={handleRemoveAll}
                      className="btn font-bold text-[18px] text-[#dc2626] border-red-500 rounded-xl mt-[40px]"
                    >
                      Remove All
                    </button>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
