import { Box, styled } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const StatWrapper = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.spacing(2)};
  min-width: 300px;
`,
)

const StatHeader = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
`,
)

const StyledTrend = styled(TrendingUpIcon)(
  ({ theme }) => `
  color: ${theme.palette.success.dark};
  font-size: 16px;
  vertical-alignment: sub;
`,
)

const StatValue = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.primary};
  font-size: 34px;
  font-weight: ${theme.typography.fontWeightMedium};
`,
)

const StatDiff = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.success.dark};
  display: inline;
  font-weight: ${theme.typography.fontWeightMedium};
  margin-left: ${theme.spacing(0.5)};
  margin-right: ${theme.spacing(0.5)};
`,
)

const StatPrevious = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
  display: inline;
  font-size: 12px;
`,
)

export default function Usage () {

  return (
    <>
      <h2>使用 styled-components</h2>
      <StatWrapper>
        <StatHeader>Sessions</StatHeader>
        <StatValue>98.3 K</StatValue>
        <StyledTrend/>
        <StatDiff>18.77%</StatDiff>
        <StatPrevious>vs last week</StatPrevious>
      </StatWrapper>

      <h2>使用 mui system</h2>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          component={TrendingUpIcon}
          sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
        />
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'medium',
            mx: 0.5,
          }}
        >
          18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
          vs. last week
        </Box>
      </Box>
    </>
  )
}
