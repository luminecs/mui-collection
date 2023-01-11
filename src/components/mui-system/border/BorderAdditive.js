import { Box } from '@mui/material'
import { BgColor } from '../../../util/Cons'

const commonStyles = {
  width: '5rem',
  height: '5rem',
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
}

export default function BorderAdditive () {
  return (
    <Box sx={{ display: 'flex', bgcolor: BgColor }}>
      <Box sx={{ ...commonStyles, border: 1 }}/>
      <Box sx={{ ...commonStyles, borderTop: 1 }}/>
    </Box>
  )
}
