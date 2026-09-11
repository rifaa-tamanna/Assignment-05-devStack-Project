import { Suspense } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologiesBox/Technologies"
import type { ITechnologies } from "./Types/TechnologiesType"



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

      <Suspense fallback={<p>Loading...</p>}>
        <Technologies technologiesPromises={technologiesPromises} />
      </Suspense>

    </>
  )
}

export default App
