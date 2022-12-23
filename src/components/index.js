import { Link as RRLink } from 'react-router-dom'
import { Grid } from '@mui/material'

export default function Index () {
  return (
    <>
      <h2>React</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <RRLink to="/react/suspense">Suspense</RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useMemo">useMemo</RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/WithoutUseMemo">
            WithoutUseMemo
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/click-counter">
            UseRefClickCounter
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/stopwatch">
            UseRefStopwatch
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/focus-input">
            UseRefFocusInput
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/scroll-image-into-view">
            UseRefScrollImageIntoView
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/play-pause-video">
            UseRefVideoPlayer
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useRef/expose-ref">
            UseRefExposeRef
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useReducer/counter">
            UseReducerCounter
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useReducer/form">
            UseReducerForm
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useReducer/todolist-array">
            UseReducerTodolist
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useReducer/todolist-lmmer">
            UseReducerTodolistLmmer
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useReducer/pass-initializer-function">
            UseReducerPassInitializerFunction
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useContext/theme">
            UseContextTheme
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useEffect/connect-chat-server">
            UseEffectConnectServer
          </RRLink>
        </Grid>
        <Grid item xs={6}>
          <RRLink to="/react/useEffect/listen-global-browser-event">
            UseEffectListenGlobalEvent
          </RRLink>
        </Grid>
      </Grid>

      <h2>MUI</h2>
      <RRLink to="/mui/paper">Paper</RRLink>

      <h2>MUI-system</h2>
      <RRLink to="/mui/system/usage">usage</RRLink>
      <RRLink to="/mui/system/sx">sx prop</RRLink>
    </>
  )
}
