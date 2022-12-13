import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components'

function App () {

  return (
    <Routes>
      <Route path="/mui-collection" element={<Index/>}/>
    </Routes>
  )
}

export default App
