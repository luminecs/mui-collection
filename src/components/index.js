import { Link as RRLink } from 'react-router-dom'
import { Grid } from '@mui/material'

const link = {
  margin: 2,
}

export default function Index () {
  return (
    <>
      <h2>React</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/suspense">Suspense</RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useMemo">useMemo</RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/WithoutUseMemo">
            WithoutUseMemo
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/click-counter">
            UseRefClickCounter
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/stopwatch">
            UseRefStopwatch
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/focus-input">
            UseRefFocusInput
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/scroll-image-into-view">
            UseRefScrollImageIntoView
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/play-pause-video">
            UseRefVideoPlayer
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useRef/expose-ref">
            UseRefExposeRef
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useReducer/counter">
            UseReducerCounter
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink style={link} to="/react/useReducer/form">
            UseReducerForm
          </RRLink>
        </Grid>
      </Grid>

      <h2>MUI</h2>
      <RRLink style={link} to="/mui/paper">Paper</RRLink>

      <h2>MUI-system</h2>
      <RRLink style={link} to="/mui/system/usage">usage</RRLink>
      <RRLink style={link} to="/mui/system/sx">sx prop</RRLink>
    </>
  )
}
