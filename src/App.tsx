import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologiesBox/Technologies"
import type { ITechnologies } from "./Types/TechnologiesType"
import SelectedCard from "./components/technologiesBox/SelectedCard"
import Footer from "./components/Footer"



const technologies = async(): Promise<ITechnologies[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {
  
  const technologiesPromises = technologies()
 


  return (



    <>
      
      <Nav />
      <Banner />
    
      <Suspense
        fallback={
          <div className="min-h-100 flex flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-[#DB2777]"></span>
            <p className="text-[#64748B] text-lg font-medium">
              Loading technologies...
            </p>
          </div>
        }
      >
        <Technologies technologiesPromises={technologiesPromises} />
      </Suspense>

      <Footer />

    </>
  )
}

export default App
