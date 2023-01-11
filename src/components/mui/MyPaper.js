import { Paper } from '@mui/material'

function BasicPaper () {
  return <Paper sx={{ width: 100, height: 100 }}/>
}

export default function MyPaper () {
  return (
    <>
      <BasicPaper/>
    </>
  )
}
