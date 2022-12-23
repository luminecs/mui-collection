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
import UseRefStopwatch from './react/useRef/stopwatch'
import UseRefFocusInput from './react/useRef/focus-input'
import UseRefScrollImageIntoView from './react/useRef/scroll-image-into-view'
import UseRefVideoPlayer from './react/useRef/play-pause-video'
import UseRefExposeRef from './react/useRef/expose-ref'
import UseReducerCounter from './react/useReducer/counter/counter'

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
      <Route path="/react/useRef/stopwatch" element={<UseRefStopwatch/>}/>
      <Route path="/react/useRef/focus-input" element={<UseRefFocusInput/>}/>
      <Route path="/react/useRef/scroll-image-into-view" element={<UseRefScrollImageIntoView/>}/>
      <Route path="/react/useRef/play-pause-video" element={<UseRefVideoPlayer/>}/>
      <Route path="/react/useRef/expose-ref" element={<UseRefExposeRef/>}/>
      <Route path="/react/useReducer/counter" element={<UseReducerCounter/>}/>
    </Routes>
  )
}

export default App
