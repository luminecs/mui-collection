import { Box, Paper } from '@mui/material'
import CodeBlock from './CodeBlock'

export default function Index () {

  const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

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
      <div>
        <CodeBlock code={JSCode} language="javascript" />
      </div>
    </>
  )
}
