import { Link as RRLink } from 'react-router-dom'
import UseRefStopwatch from '../react/useRef/stopwatch'

const link = {
  margin: 2,
}

export default function Index () {
  return (
    <>
      <h2>React</h2>
      <RRLink style={link} to="/react/suspense">Suspense</RRLink>
      <RRLink style={link} to="/react/useMemo">useMemo</RRLink>
      <RRLink style={link} to="/react/WithoutUseMemo">WithoutUseMemo</RRLink>
      <RRLink style={link} to="/react/useRef/click-counter">UseRefClickCounter</RRLink>
      <RRLink style={link} to="/react/useRef/stopwatch">UseRefStopwatch</RRLink>

      <h2>MUI</h2>
      <RRLink style={link} to="/mui/paper">Paper</RRLink>

      <h2>MUI-system</h2>
      <RRLink style={link} to="/mui/system/usage">usage</RRLink>
      <RRLink style={link} to="/mui/system/sx">sx prop</RRLink>
    </>
  )
}
