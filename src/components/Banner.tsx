import React from 'react'
import bannerImg from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='flex justify-between items-center gap-4 max-w-7xl mx-auto'>
        {/* text section */}
        <div>
            <h1 className='font-bold text-5xl text-[#0F172A]'>
                Build Your Ideal < br /> 
                <span className='bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'> Development Stack </span>    
            </h1>
            <p className='text-[#475569] pt-5 pb-10 text-[18px]'>
                Explore frontend, backend, database, and tooling options, <br />
                compare them side by side, and put together the stack that fits your <br />
                next project.
            </p>

            <div className='flex gap-4'>
                <button className="btn w-50 btn-active text-white bg-linear-to-r from-[#FF5722] to-[#D81B7E]">Explore Technologies</button>
                <button className="btn w-50 text-black">Learn More</button>
            </div>
        </div>

        <div className='cover'>
            <img src={bannerImg} alt="Banner Stack" />
        </div>
    </div>
  )
}

export default Banner