 

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries'

function App() {






  return (
    <>
    <h2>amr kora experiment dekhtasi</h2>
    <div className="" style={{padding:'20px'}}>
      <h1 style={{textAlign:'center'}}>React world Tour</h1>
      <Suspense fallback={<h2 style={{textAlign:'center'}}>Loading countries data ...</h2>}>
      <Countries/>
      </Suspense>
    </div>
    </>
  )
}

export default App
