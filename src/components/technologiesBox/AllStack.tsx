import type { ITechnologies } from "../../Types/TechnologiesType"
import SingleStackCard from "./SingleStackCard"

interface AllStackProps {
  technologies: ITechnologies[]
}


const AllStack = ({ technologies }: AllStackProps) => {

  return (
    <div className="grid grid-cols-3 gap-8 pt-8 pb-[80px]">
        
      {
        technologies.map((technology: ITechnologies, ind: number) => {

          return <SingleStackCard technology={technology} key={ind} />

        })
      }

    </div>
  )
}

export default AllStack