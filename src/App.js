import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components'
import MyPaper from './components/mui/MyPaper'
import Sx from './components/mui-system/sx'
import Usage from './components/mui-system/usage'
import SuspenseTest from './react/suspense'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/mui/paper" element={<MyPaper/>}/>
      <Route path="/mui/system/usage" element={<Usage/>}/>
      <Route path="/mui/system/sx" element={<Sx/>}/>
      <Route path="/react/suspense" element={<SuspenseTest/>}/>
    </Routes>
  )
}

export default App
