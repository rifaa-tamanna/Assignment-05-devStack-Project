import React, { use } from 'react'
import type { ITechnologies } from '../../Types/TechnologiesType'
import AllStack from './AllStack'



interface TechnologiesProps {
  technologiesPromises: Promise<ITechnologies[]>
}



const Technologies = ({technologiesPromises}: TechnologiesProps) => {
  const technologies = use(technologiesPromises)
  console.log(technologies)



  return (
    <div className='max-w-7xl mx-auto'>
        <div className="font-bold text-4xl">Explore the <span className='bg-gradient-to-r from-[#DB4BA9] to-[#CA4FB9] bg-clip-text text-transparent'>Technologies</span> </div>
        <div className="text-[64748B] text-4 pt-3">Pick one technology per category to build your ideal stack.</div>


        <AllStack technologies={technologies} /> 
    </div>


  )
}

export default Technologies