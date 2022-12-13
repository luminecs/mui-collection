import { Box, Paper } from '@mui/material'

export default function Index () {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant="outlined"/>
        <Paper variant="outlined" square/>
      </Box>
      <div>展示源码</div>
      <pre>
        <code>
          const s = "1";
          const s = "2";
        </code>
      </pre>
      <div className='language-typescript'>const s = "1"</div>
      <div className='hljs' dangerouslySetInnerHTML={{ __html: `<pre><p>sss</p></pre>` }}></div>
    </>
  )
}
