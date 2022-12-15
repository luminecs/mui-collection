import { Link as RRLink } from 'react-router-dom'

export default function Index () {
  return (
    <>
      <h2>MUI</h2>
      <RRLink to="/mui/paper">Paper</RRLink>

      <h2>MUI-system</h2>
      <RRLink to="/mui/system/usage">usage</RRLink>
      <RRLink to="/mui/system/sx">sx prop</RRLink>
    </>
  )
}
