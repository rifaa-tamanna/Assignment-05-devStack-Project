import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col min-[639px]:pt-[80px] md:flex-row pt-[40px] justify-between items-center gap-8 md:gap-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
      {/* text section */}
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#0F172A]">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            {" "}
            Development Stack{" "}
          </span>
        </h1>

        <p className="text-[#475569] pt-5 pb-10 text-[16px] md:text-[17px] lg:text-[18px]">
          Explore frontend, backend, database, and tooling options,{" "}
          <br className="hidden md:block" />
          compare them side by side, and put together the stack that fits your{" "}
          <br className="hidden md:block" />
          next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn w-full sm:w-50 btn-active text-white bg-linear-to-r from-[#FF5722] to-[#D81B7E]">
            Explore Technologies
          </button>

          <button className="btn w-full sm:w-50 text-black">Learn More</button>
        </div>
      </div>

      <div className="h-auto w-full md:w-1/2 max-w-xl">
        <img src={bannerImg} alt="Banner Stack" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
