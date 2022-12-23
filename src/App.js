import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './components'
import MyPaper from './components/mui/MyPaper'
import Sx from './components/mui-system/sx'
import Usage from './components/mui-system/usage'
import SuspenseTest from './react/suspense'
import UseMemoTest from './react/useMemo'
import WithoutUseMemoTest from './react/useMemo/indexWithoutUseMemo'
import UseRefClickCounter from './react/useRef/click-counter'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/mui/paper" element={<MyPaper/>}/>
      <Route path="/mui/system/usage" element={<Usage/>}/>
      <Route path="/mui/system/sx" element={<Sx/>}/>
      <Route path="/react/suspense" element={<SuspenseTest/>}/>
      <Route path="/react/useMemo" element={<UseMemoTest/>}/>
      <Route path="/react/WithoutUseMemo" element={<WithoutUseMemoTest/>}/>
      <Route path="/react/useRef/click-counter" element={<UseRefClickCounter/>}/>
    </Routes>
  )
}

export default App
