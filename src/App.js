import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components'
import MyPaper from './components/MyPaper'

function App () {

  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/paper" element={<MyPaper/>}/>
    </Routes>
  )
}

export default App
