import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components'
// import { useLayoutEffect } from 'react'

function App () {
  // useLayoutEffect(() => {
  //
  // }, [])

  return (
    <Routes>
      <Route path="/mui-collection" element={<Index/>}/>
    </Routes>
  )
}

export default App
