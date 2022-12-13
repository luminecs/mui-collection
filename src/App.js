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
      <Route path="/" element={<Index/>}/>
    </Routes>
  )
}

export default App
