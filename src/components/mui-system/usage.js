import { alpha, Box, styled } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CodeBlock from '../CodeBlock'
import { BgColor } from '../../util/Cons'

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
    <Box sx={{ bgcolor: BgColor }}>
      <Box sx={{ mx: 2 }}>
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
          <Box
            sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
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
          <Box
            sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
            vs. last week
          </Box>
        </Box>

        <h2>Responsive demo</h2>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
          }}
        >
          <Box
            component="img"
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            sx={{
              height: 233,
              width: 350,
              // todo 笔记：注意写法
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
          />
          <Box
            sx={{
              display: 'flex', /* todo 笔记：让子元素横向排列 */
              flexDirection: 'column', /* todo 笔记：让子元素纵向排列 */
              alignItems: { xs: 'center', md: 'flex-start' }, /* todo */
              m: 3,
              minWidth: { md: 350 },
            }}
          >
            {/* todo 笔记：Box 本质是 div，使用 Box 代替 div、span 等原生元素 */}
            <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
              123 Main St, Phoenix AZ
            </Box>
            <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
              $280,000 — $310,000
            </Box>
            <Box
              sx={{
                mt: 1.5,
                p: 0.5, /* todo 笔记：函数 */
                backgroundColor: (theme) => {
                  return alpha(theme.palette.primary.main, 0.1)
                },
                borderRadius: '5px',
                color: 'primary.main',
                fontWeight: 'medium',
                display: 'flex',
                fontSize: 12,
                alignItems: 'center', /* todo 笔记：子元素 水平居中 */
                '& svg': {
                  fontSize: 21,
                  mr: 0.5,
                },
              }}
            >
              <ErrorOutlineIcon/>
              CONFIDENCE SCORE 85%
            </Box>
          </Box>
        </Box>

        <CodeBlock
          language="javascript"
          url="https://raw.githubusercontent.com/luminecs/mui-collection/main/src/components/mui-system/usage.js"/>
      </Box>
    </Box>
  )
}
